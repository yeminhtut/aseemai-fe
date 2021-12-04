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
    CREATE_CUSTOMERS_REQUEST(type) {
        return { type }
    },
    CREATE_CUSTOMERS_RESPONSE(type) {
        return { type }
    },
    CREATE_CUSTOMER_DOCUMENT_REQUEST(type) {
        return { type }
    },
    CREATE_CUSTOMER_DOCUMENT_RESPONSE(type) {
        return { type }
    },
    GET_APPLICATION_LIST_REQUEST(type) {
        return { type }
    },
    GET_APPLICATION_LIST_RESPONSE(type) {
        return { type }
    },
    CALCULATE_EMI_REQUEST(type) {
        return { type }
    },
    CALCULATE_EMI_RESPONSE(type) {
        return { type }
    },
    GET_VEHICLE_REQUEST(type) {
        return { type }
    },
    GET_VEHICLE_RESPONSE(type) {
        return { type }
    },
    CREATE_APPLICATION_REQUEST(type) {
        return { type }
    },
    CREATE_APPLICATION_RESPONSE(type) {
        return { type }
    },
 
    GET_APPLICATION_REQUEST(type) {
        return { type }
    },
    GET_APPLICATION_RESPONSE(type) {
        return { type }
    },
    GET_REFERENCE_REQUEST(type) {
        return { type }
    },
    GET_REFERENCE_RESPONSE(type) {
        return { type }
    },
    
    GET_GUARANTOR_REQUEST(type) {
        return { type }
    },
    GET_GUARANTOR_RESPONSE(type) {
        return { type }
    },
    GET_PAYMENT_LIST_REQUEST(type) {
        return { type }
    },
    GET_PAYMENT_LIST_RESPONSE(type) {
        return { type }
    },
    GET_DOCUMENT_CATEGORY_REQUEST(type) {
        return { type }
    },
    GET_DOCUMENT_CATEGORY_RESPONSE(type) {
        return { type }
    },
    GET_DOCUMENT_TYPE_REQUEST(type) {
        return { type }
    },
    GET_DOCUMENT_TYPE_RESPONSE(type) {
        return { type }
    },
    UPDATE_DOCUMENT_REQUEST(type) {
        return { type }
    },
    UPDATE_DOCUMENT_RESPONSE(type) {
        return { type }
    },
    GET_DOCUMENT_LIST_REQUEST(type) {
        return { type }
    },
    GET_DOCUMENT_LIST_RESPONSE(type) {
        return { type }
    },
    GET_PAYMENT_REQUEST(type) {
        return { type }
    },
    GET_PAYMENT_RESPONSE(type) {
        return { type }
    },
    GET_APPLICATION_INFO_REQUEST(type) {
        return { type }
    },
    
    GET_APPLICATION_INFO_RESPONSE(type) {
        return { type }
    },
    GET_EMPLOYMENT_TYPE_REQUEST(type) {
        return { type }
    },
    GET_EMPLOYMENT_TYPE_RESPONSE(type) {
        return { type }
    },
    GET_EMPLOYMENT_TYPE_ONE_REQUEST(type) {
        return { type }
    },
    GET_EMPLOYMENT_TYPE_ONE_RESPONSE(type) {
        return { type }
    },
    GET_INDUSTRY_TYPE_REQUEST(type) {
        return { type }
    },
    GET_INDUSTRY_TYPE_RESPONSE(type) {
        return { type }
    },
    GET_INDUSTRY_TYPE_ONE_REQUEST(type) {
        return { type }
    },
    GET_INDUSTRY_TYPE_ONE_RESPONSE(type) {
        return { type }
    },
    CREATE_PROFILE_EMPLOYMENT_REQUEST(type) {
        return { type }
    },
    CREATE_PROFILE_EMPLOYMENT_RESPONSE(type) {
        return { type }
    },
    GET_CITIES_REQUEST(type) {
        return { type }
    },
    GET_CITIES_RESPONSE(type) {
        return { type }
    },
    CREATE_LOAN_REQUEST(type) {
        return { type }
    },
    CREATE_LOAN_RESPONSE(type) {
        return { type }
    },
    VERIFY_OTP_REQUEST(type) {
        return { type }
    },
    VERIFY_OTP_RESPONSE(type) {
        return { type }
    },
    GET_EULA_REQUEST(type) {
        return { type }
    },
    GET_EULA_RESPONSE(type) {
        return { type }
    },
    CREATE_GUARANTOR_REQUEST(type) {
        return { type }
    },
    CREATE_GUARANTOR_RESPONSE(type) {
        return { type }
    },
    GET_CDE_SCORE_REQUEST(type) {
        return { type }
    },
    GET_CDE_SCORE_RESPONSE(type) {
        return { type }
    },
    UPDATE_USER_EULA_REQUEST(type) {
        return { type }
    },
    UPDATE_USER_EULA_RESPONSE(type) {
        return { type }
    },
    CREATE_PROFILE_REFERENCE_REQUEST(type) {
        return { type }
    },
    CREATE_PROFILE_REFERENCE_RESPONSE(type) {
        return { type }
    },
    UPDATE_CUSTOMER_REQUEST(type) {
        return { type }
    },
    UPDATE_CUSTOMER_RESPONSE(type) {
        return { type }
    },
    UPDATE_APPLICATION_REQUEST(type) {
        return { type }
    },
    UPDATE_APPLICATION_RESPONSE(type) {
        return { type }
    },
    UPDATE_APPLICATION_STATUS_REQUEST(type) {
        return { type }
    },
    UPDATE_APPLICATION_STATUS_RESPONSE(type) {
        return { type }
    },
    CALCULATE_CDE_REQUEST(type) {
        return { type }
    },
    CALCULATE_CDE_RESPONSE(type) {
        return { type }
    },
    DATA_CLEAR_REQUEST(type) {
        return { type }
    },
    ACTIVATE_APPLICATION_REQUEST(type) {
        return { type }
    },
    ACTIVATE_APPLICATION_RESPONSE(type) {
        return { type }
    },
    UPDATE_APPLICATION_LOAN_REQUEST(type) {
        return { type }
    },
    UPDATE_APPLICATION_LOAN_RESPONSE(type) {
        return { type }
    },
    UPDATE_APPLICATION_REFERENCE_REQUEST(type) {
        return { type }
    },
    UPDATE_APPLICATION_REFERENCE_RESPONSE(type) {
        return { type }
    },
    UPDATE_APPLICATION_GUARANTOR_REQUEST(type) {
        return { type }
    },
    UPDATE_APPLICATION_GUARANTOR_RESPONSE(type) {
        return { type }
    },
    GET_TRANSACTIONS_REQUEST(type) {
        return { type }
    },
    GET_TRANSACTIONS_RESPONSE(type) {
        return { type }
    },
    CREATE_TRANSACTION_REQUEST(type) {
        return { type }
    },
    CREATE_TRANSACTION_RESPONSE(type) {
        return { type }
    },
    GET_CUSTOMER_STATS_REQUEST(type) {
        return { type }
    },
    GET_CUSTOMER_STATS_RESPONSE(type) {
        return { type }
    },
    GET_MONTHS_APPLICATION_STATS_REQUEST(type) {
        return { type }
    },
    GET_MONTHS_APPLICATION_STATS_RESPONSE(type) {
        return { type }
    },
    GET_OUTLETS_REQUEST(type) {
        return { type }
    },
    GET_OUTLETS_RESPONSE(type) {
        return { type }
    },
}

export default actions
