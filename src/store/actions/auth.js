import actionTypes from '../actionTypes';
import storage from '../../utils/storage'

export function login(payload) {
    return {
        type: actionTypes.LOGIN_REQUEST,
        payload
    }
}

export function loginResponse(payload, error = null) {
    if (payload.data && payload.data.data.token) {
        storage.setToken(payload.data.data.token)
    }
    return {
        type: actionTypes.LOGIN_RESPONSE,
        payload: payload.data,
        error
    }
}

export function logout() {
    return {
        type: actionTypes.LOGOUT
    }
}

export function getCurrentUser(payload) {
    return {
        type: actionTypes.GET_CURRENT_USER,
        payload
    }
}

export function setCurrentUser(data) {
    return {
        type: actionTypes.SET_CURRENT_USER,
        user: data.data
    }
}

export function getEula(params) {
    return {
        type: actionTypes.GET_EULA_REQUEST,
        params
    }
}

export function getEulaSuccess(data) {
    return {
        type: actionTypes.GET_EULA_RESPONSE,
        eula: data.data
    }
}