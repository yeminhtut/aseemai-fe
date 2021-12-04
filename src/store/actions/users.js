import actionTypes from '../actionTypes'

export function updateUserEula(payload) {
    return {
        type: actionTypes.UPDATE_USER_EULA_REQUEST,
        payload
    }
}

export function updateUserEulaSuccess(payload) {
    return {
        type: actionTypes.UPDATE_USER_EULA_RESPONSE,
        payload: payload.data
    }
}
