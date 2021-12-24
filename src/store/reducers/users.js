import actionTypes from '../actionTypes'

const initialState = {
    userDetailError: null,
    isLoadingUser: false,
    isUpdatingUserEula: false,
    user: {}
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_USER_EULA_REQUEST:
            return {
                ...state,
                updatedTermObj: {},
                isUpdatingUserEula: true,
                userDetailError: null
            }

        case actionTypes.UPDATE_USER_EULA_RESPONSE:
            return {
                ...state,
                updatedTermObj: action.payload.data,
                isUpdatingUserEula: false,
                userDetailError: action.error
            }

        default:
            return state
    }
}

export default usersReducer
