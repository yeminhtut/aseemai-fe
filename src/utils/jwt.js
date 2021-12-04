import jwtDecode from 'jwt-decode'

export const isExpired = token => {
    try {
        const { exp } = jwtDecode(token)
        const isExpired = Date.now() / 1000 > exp
        return isExpired
    } catch (err) {
        return true
    }
}

export const decodeJWT = token => {
    try {
        return jwtDecode(token)
    } catch (err) {
        return {}
    }
}

export const isInvalidJWT = error => {
    if (!error || !error.response) return false
    if (error.response.data.errors[0].code === 'InvalidJWTToken') return true
    return false
}

export const getAuthErrorMsg = (error, t) => {
    if (!error) return
    if (error.code === 'auth/user-not-found') return t('common_invalid_email_or_password')
    // if (error.response.data.errors[0].code === 'InvalidJWTToken') return t('common_logout_message')
    if (error.response) return error.response.data.errors[0].message
    return error.message
}
