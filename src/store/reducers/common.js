import actionTypes from '../actionTypes'

const initialState = {
    countries: [],
    error: null,
    isLoadingCountries: false,
    isLoadingGetOtp: false,
    language: '',
}

const commonReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.GET_CITIES_REQUEST:
            return {
                ...state,
                cityList: [],
                isLoadingCities: true,
                error: null
            }

        case actionTypes.GET_CITIES_RESPONSE:
            return {
                ...state,
                cityList: action.cityList,
                isLoadingCities: false,
                error: action.error
            }

        case actionTypes.VERIFY_OTP_REQUEST:
            return {
                ...state,
                isLoadingGetOtp: true,
                error: null
            }

        case actionTypes.VERIFY_OTP_RESPONSE:
            return {
                ...state,
                isLoadingGetOtp: false,
                otpCode: action.otp,
                error: action.error
            }

        case actionTypes.GET_OUTLETS_REQUEST:
            return {
                ...state,
                cityList: [],
                error: null
            }

        case actionTypes.GET_OUTLETS_RESPONSE:
            return {
                ...state,
                outletList: action.outletList.data,
                error: action.error
            }

        default:
            return state
    }
}

export default commonReducer
