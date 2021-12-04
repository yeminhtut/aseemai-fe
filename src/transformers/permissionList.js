const permissionList = {
    toState: (data = {}) => {
        return {
            id: data.id,
            permissionType: data.permission_type,
            description: data.description
        }
    }
}

export default permissionList
