import actionTypes from '../actionTypes'

export function getCustomers(params) {
    return {
        type: actionTypes.GET_CUSTOMERS_REQUEST,
        params
    }
}

export function getCustomersSuccess(data) {
    return {
        type: actionTypes.GET_CUSTOMERS_RESPONSE,
        list: data.data
    }
}

export function createDeveloper(params) {
    return {
        type: actionTypes.CREATE_DEVELOPER_REQUEST,
        params
    }
}

export function createDeveloperSuccess(data) {
    return {
        type: actionTypes.CREATE_DEVELOPER_RESPONSE,
        developer: data
    }
}
