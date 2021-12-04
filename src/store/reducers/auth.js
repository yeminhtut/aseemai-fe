import get from 'lodash/get'
import actionTypes from '../actionTypes';

const initialState = {
    user: {},
    loginError: null,
    isLoadingLogin: false,
    error: null,
    isLoadingGetCustomers: false,
    isLoadingGetApplications: false,
    list: [],
    applicationList: [],
    isLoadingLogout: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isLoadingLogin: true,
                loginError: null,
                isLoadingLogout: false
            }

        case actionTypes.LOGIN_RESPONSE:
            return {
                ...state,
                isLoadingLogin: false,
                isLoadingLogout: false,
                loginError: action.error,
                user: get(action.payload.data, 'user') || {}
            }

        case actionTypes.LOGOUT:
            return {
                ...state,
                isLoadingLogout: true,
                loginError: action.error,
                user: {}
            }

        case actionTypes.GET_CUSTOMERS_REQUEST:
            return {
                ...state,
                isLoadingGetCustomers: true,
                error: null
            }

        case actionTypes.GET_CUSTOMERS_RESPONSE:
            return {
                ...state,
                isLoadingGetCustomers: false,
                error: action.error,
                list: action.list.data
            }

        case actionTypes.GET_APPLICATION_LIST_REQUEST:
            return {
                ...state,
                isLoadingGetApplications: true,
                error: null
            }

        case actionTypes.GET_APPLICATION_LIST_RESPONSE:
            return {
                ...state,
                isLoadingGetApplications: false,
                error: action.error,
                applicationList: action.list.data
            }

        case actionTypes.GET_EULA_REQUEST:
            return {
                ...state,
                error: null
            }

        case actionTypes.GET_EULA_RESPONSE:
            return {
                ...state,
                error: action.error,
                eula: action.eula
            }

        case actionTypes.GET_CURRENT_USER:
            return {
                ...state,
                error: null
            }

        case actionTypes.SET_CURRENT_USER:
            return {
                ...state,
                error: action.error,
                user: get(action.user,'data') || {}
            }


        default:
            return state
    }
}

export default authReducer
