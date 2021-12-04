import get from 'lodash/get'
import filter from 'lodash/filter'
import includes from 'lodash/includes'

export const haveRequiredRoles = (currentUser, requiredMerchantRoles = []) => {
    const roles = get(currentUser, 'roles', [])
    return filter(roles, role => includes(requiredMerchantRoles, role.id)).length > 0
}

export const requiredUpdatePermission = (currentUser, targetUser) => {
    const currentRoleObj = get(currentUser, 'roles', '')
    const targetRole = get(targetUser, 'role', '')
    const isOwner = haveRequiredRoles(currentUser, ['mer'])
    const isManager = haveRequiredRoles(currentUser, ['mer_manager'])
    const isMe = currentUser.id === targetUser.id
    if (isOwner && (isMe || targetRole === 'mer_manager' || targetRole === 'mer_staff')) {
        return true // owner can update all
    }
    if (isManager && (isMe || targetRole === 'mer_staff')) {
        return true // manager can update himself and staff
    }
    if (currentRoleObj[0].id === 'mer_staff' && currentUser.id === targetUser.id) {
        return true // staff can update himself
    }
    return false
}

export const requiredDeletePermission = (currentUser, targetUser) => {
    const targetRole = get(targetUser, 'role', '')
    const isOwner = haveRequiredRoles(currentUser, ['E'])
    const isManager = haveRequiredRoles(currentUser, ['M'])
    if (isOwner && currentUser.id !== targetUser.id) {
        return true // owner can delete all except himself
    }
    if (isManager && targetRole === 'mer_staff') {
        return true // manager can delete staff
    }
    return false
}

export const haveRequiredPermission = (currentUser, requiredPermissionId) => {
    const isOwner = haveRequiredRoles(currentUser, ['S'])
    if (isOwner) {
        return true
    }
    const currentUserPermissionIds = get(currentUser, 'merchantUser.merchantUserPermissionConfigIds', [])
    const isValid = includes(currentUserPermissionIds, requiredPermissionId)
    return isValid
}
