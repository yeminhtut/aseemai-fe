import actionTypes from '../actionTypes'

export function getCities(params) {
    return {
        type: actionTypes.GET_CITIES_REQUEST,
        params
    }
}

export function getCitiesSuccess(data) {
    return {
        type: actionTypes.GET_CITIES_RESPONSE,
        cityList: data.data
    }
}

export function verifyOtp(params) {
    return {
        type: actionTypes.VERIFY_OTP_REQUEST,
        params
    }
}

export function verifyOtpSuccess(data) {
    return {
        type: actionTypes.VERIFY_OTP_RESPONSE,
        otp: data.data
    }
}

export function getCdeScore(params) {
    return {
        type: actionTypes.GET_CDE_SCORE_REQUEST,
        params
    }
}

export function getCdeScoreSuccess(data) {
    return {
        type: actionTypes.GET_CDE_SCORE_RESPONSE,
        otp: data.data
    }
}

export function getOutlets(params) {
    return {
        type: actionTypes.GET_OUTLETS_REQUEST,
        params
    }
}

export function getOutletsSuccess(data) {
    return {
        type: actionTypes.GET_OUTLETS_RESPONSE,
        outletList: data.data
    }
}
