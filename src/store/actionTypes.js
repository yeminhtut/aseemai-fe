const actions = {
    LOGIN_REQUEST(type) {
        return { type }
    },
    LOGIN_RESPONSE(type) {
        return { type }
    },
    LOGOUT(type) {
        return { type }
    },
    CLEAR_CURRENT_USER(type) {
        return { type }
    },
    GET_CURRENT_USER(type) {
        return { type }
    },
    SET_CURRENT_USER(type, user) {
        return { type, user }
    },
    GET_CUSTOMERS_REQUEST(type) {
        return { type }
    },
    GET_CUSTOMERS_RESPONSE(type) {
        return { type }
    },
    CREATE_DEVELOPER_REQUEST(type) {
        return { type }
    },
    CREATE_DEVELOPER_RESPONSE(type) {
        return { type }
    }
}

export default actions
