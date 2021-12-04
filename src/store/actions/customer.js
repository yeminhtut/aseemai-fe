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

export function getApplicationList(params) {
    return {
        type: actionTypes.GET_APPLICATION_LIST_REQUEST,
        params
    }
}

export function getDocumentList(params) {
    return {
        type: actionTypes.GET_DOCUMENT_LIST_REQUEST,
        params
    }
}

export function getApplicationListSuccess(data) {
    return {
        type: actionTypes.GET_APPLICATION_LIST_RESPONSE,
        list: data.data
    }
}
export function getDocumentListSuccess(data) {
    return {
        type: actionTypes.GET_DOCUMENT_LIST_RESPONSE,
        list: data.data
    }
}

export function createCustomer(params) {
    return {
        type: actionTypes.CREATE_CUSTOMERS_REQUEST,
        params
    }
}

export function createCustomerSuccess(data) {
    return {
        type: actionTypes.CREATE_CUSTOMERS_RESPONSE,
        user: data.data
    }
}

export function getCustomersFailed(failed, error) {
    return {
        type: actionTypes.GET_CUSTOMERS_SUCCESS,
        areFailed: failed,
        listError: error
    }
}

export function createCustomerDocument(data) {
    return {
        type: actionTypes.CREATE_CUSTOMER_DOCUMENT_REQUEST,
        data
    }
}

export function createCustomerDocumentSuccess(data) {
    return {
        type: actionTypes.CREATE_CUSTOMER_DOCUMENT_RESPONSE,
        data
    }
}


export function calculateEmiRequest(params) {
    return {
        type: actionTypes.CALCULATE_EMI_REQUEST,
        params
    }
}

export function calculateEmiSuccess(data) {
    return {
        type: actionTypes.CALCULATE_EMI_RESPONSE,
        data
    }
}

export function getVehicles(params) {
    return {
        type: actionTypes.GET_VEHICLE_REQUEST,
        params
    }
}

export function getVehiclesResponse(data) {
    return {
        type: actionTypes.GET_VEHICLE_RESPONSE,
        list: data.data
    }
}

export function createApplication(params) {
    return {
        type: actionTypes.CREATE_APPLICATION_REQUEST,
        params
    }
}

export function createApplicationSuccess(data) {
    return {
        type: actionTypes.CREATE_APPLICATION_RESPONSE,
        application: data.data
    }
}

export function getApplicationById(params) {
    return {
        type: actionTypes.GET_APPLICATION_REQUEST,
        params
    }
}

export function getApplicationSuccess(data) {
    return {
        type: actionTypes.GET_APPLICATION_RESPONSE,
        application: data.data
    }
}

export function getGuarantorsById(params) {
    return {
        type: actionTypes.GET_GUARANTOR_REQUEST,
        params
    }
}

export function getGuarantorSuccess(data) {
    return {
        type: actionTypes.GET_GUARANTOR_RESPONSE,
        guarantors: data.data
    }
}

export function getPaymentListById(params) {
    return {
        type: actionTypes.GET_PAYMENT_LIST_REQUEST,
        params
    }
}

export function getPaymentListSuccess(data) {
    return {
        type: actionTypes.GET_PAYMENT_LIST_RESPONSE,
        paymentList: data.data
    }
}


export function getPaymentDetailById(params) {
    return {
        type: actionTypes.GET_PAYMENT_REQUEST,
        params
    }
}

export function getPaymentDetailSuccess(data) {
    return {
        type: actionTypes.GET_PAYMENT_RESPONSE,
        paymentDetail: data.data
    }
}

export function getReferenceById(params) {
    return {
        type: actionTypes.GET_REFERENCE_REQUEST,
        params
    }
}

export function getReferenceSuccess(data) {
    return {
        type: actionTypes.GET_REFERENCE_RESPONSE,
        reference: data.data
    }
}
export function getApplicationInfo(params) {
    return {
        type: actionTypes.GET_APPLICATION_INFO_REQUEST,
        params
    }
}

export function getApplicationInfoSuccess(data) {
    return {
        type: actionTypes.GET_APPLICATION_INFO_RESPONSE,
        applicationInfo: data.data
    }
}

export function getEmploymentTypes(params) {
    return {
        type: actionTypes.GET_EMPLOYMENT_TYPE_REQUEST,
        params
    }
}

export function getEmploymentTypesSuccess(data) {
    return {
        type: actionTypes.GET_EMPLOYMENT_TYPE_RESPONSE,
        list: data.data
    }
}

export function getDocumentTypeList(params) {
    return {
        type: actionTypes.GET_DOCUMENT_TYPE_REQUEST,
        params
    }
}

export function getDocumentTypeListSuccess(data) {
    return {
        type: actionTypes.GET_DOCUMENT_TYPE_RESPONSE,
        list: data.data
    }
}

export function updateDocument(params) {
    return {
        type: actionTypes.UPDATE_DOCUMENT_REQUEST,
        params
    }
}

export function updateDocumentSuccess(data) {
    return {
        type: actionTypes.UPDATE_DOCUMENT_RESPONSE,
        data: data.data
    }
}

export function getEmploymentTypes1(params) {
    return {
        type: actionTypes.GET_EMPLOYMENT_TYPE_ONE_REQUEST,
        params
    }
}

export function getEmploymentTypes1Success(data) {
    return {
        type: actionTypes.GET_EMPLOYMENT_TYPE_ONE_RESPONSE,
        list: data.data
    }
}
export function getIndustryType(params) {
    return {
        type: actionTypes.GET_INDUSTRY_TYPE_REQUEST,
        params
    }
}

export function getDocumentCategory(params) {
    return {
        type: actionTypes.GET_DOCUMENT_CATEGORY_REQUEST,
        params
    }
}

export function getDocumentCategorySuccess(data) {
    return {
        type: actionTypes.GET_DOCUMENT_CATEGORY_RESPONSE,
        categoryList:data.data
    }
}

export function getIndustryType1(params) {
    return {
        type: actionTypes.GET_INDUSTRY_TYPE_ONE_REQUEST,
        params
    }
}


export function getIndustryType1Success(data) {
    return {
        type: actionTypes.GET_INDUSTRY_TYPE_ONE_RESPONSE,
        list: data.data
    }
}

export function getIndustryTypeSuccess(data) {
    return {
        type: actionTypes.GET_INDUSTRY_TYPE_RESPONSE,
        list: data.data
    }
}

export function createProfileEmployment(params) {
    return {
        type: actionTypes.CREATE_PROFILE_EMPLOYMENT_REQUEST,
        params
    }
}

export function createProfileEmploymentSuccess(data) {
    return {
        type: actionTypes.CREATE_PROFILE_EMPLOYMENT_RESPONSE,
        employmentInfo: data.data
    }
}

export function createLoan(params) {
    return {
        type: actionTypes.CREATE_LOAN_REQUEST,
        params
    }
}

export function createLoanSuccess(data) {
    return {
        type: actionTypes.CREATE_LOAN_RESPONSE,
        loanInfo: data.data
    }
}

export function createGuarantor(params) {
    return {
        type: actionTypes.CREATE_GUARANTOR_REQUEST,
        params
    }
}

export function createGuarantorSuccess(data) {
    return {
        type: actionTypes.CREATE_GUARANTOR_RESPONSE,
        guarantorInfo: data.data
    }
}

export function createProfileReference(params) {
    return {
        type: actionTypes.CREATE_PROFILE_REFERENCE_REQUEST,
        params
    }
}

export function createProfileReferenceSuccess(data) {
    return {
        type: actionTypes.CREATE_PROFILE_REFERENCE_RESPONSE,
        referenceInfo: data.data
    }
}

export function updateCustomer(params) {
    return {
        type: actionTypes.UPDATE_CUSTOMER_REQUEST,
        params
    }
}

export function updateCustomerSuccess(data) {
    return {
        type: actionTypes.UPDATE_CUSTOMER_RESPONSE,
        clientInfo: data.data
    }
}

export function updateApplication(params) {
    return {
        type: actionTypes.UPDATE_APPLICATION_REQUEST,
        params
    }
}

export function updateApplicationSuccess(data) {
    return {
        type: actionTypes.UPDATE_APPLICATION_RESPONSE,
        applicationInfo: data.data
    }
}

export function updateApplicationStatus(params) {
    return {
        type: actionTypes.UPDATE_APPLICATION_STATUS_REQUEST,
        params
    }
}

export function updateApplicationStatusSuccess(data) {
    return {
        type: actionTypes.UPDATE_APPLICATION_STATUS_RESPONSE,
        application: data.data
    }
}

export function calculateCde(params) {
    return {
        type: actionTypes.CALCULATE_CDE_REQUEST,
        params
    }
}

export function calculateCdeSuccess(data) {
    return {
        type: actionTypes.CALCULATE_CDE_RESPONSE,
        cdeInfo: data.data
    }
}

export function clearData() {
    return {
        type: actionTypes.DATA_CLEAR_REQUEST
    }
}

export function activateApplication(params) {
    return {
        type: actionTypes.ACTIVATE_APPLICATION_REQUEST,
        params
    }
}

export function activateApplicationSuccess(data) {
    return {
        type: actionTypes.ACTIVATE_APPLICATION_RESPONSE,
        activateInfo: data.data
    }
}

export function updateApplicationLoan(params) {
    return {
        type: actionTypes.UPDATE_APPLICATION_LOAN_REQUEST,
        params
    }
}

export function updateLoanSuccess(data) {
    return {
        type: actionTypes.UPDATE_APPLICATION_LOAN_RESPONSE,
        loanInfo: data.data
    }
}

export function updateApplicationReference(params) {
    return {
        type: actionTypes.UPDATE_APPLICATION_REFERENCE_REQUEST,
        params
    }
}

export function updateApplicationReferenceSuccess(data) {
    return {
        type: actionTypes.UPDATE_APPLICATION_REFERENCE_RESPONSE,
        referenceInfo: data.data
    }
}

export function updateApplicationGuarantor(params) {
    return {
        type: actionTypes.UPDATE_APPLICATION_GUARANTOR_REQUEST,
        params
    }
}

export function updateApplicationGuarantorSuccess(data) {
    return {
        type: actionTypes.UPDATE_APPLICATION_GUARANTOR_RESPONSE,
        referenceInfo: data.data
    }
}

export function getTransctionsByStringId(params) {
    return {
        type: actionTypes.GET_TRANSACTIONS_REQUEST,
        params
    }
}

export function getTransctionsByStringIdSuccess(data) {
    return {
        type: actionTypes.GET_TRANSACTIONS_RESPONSE,
        transactionList: data.data
    }
}

export function createTransction(data) {
    return {
        type: actionTypes.CREATE_TRANSACTION_REQUEST,
        data
    }
}

export function createTransctionSuccess(data) {
    return {
        type: actionTypes.CREATE_TRANSACTION_RESPONSE,
        transactionInfo: data.data
    }
}

export function getCurrentMonthCustomerStats(params) {
    return {
        type: actionTypes.GET_CUSTOMER_STATS_REQUEST,
        params
    }
}

export function getCurrMonthCustomerStatsSuccess(data) {
    return {
        type: actionTypes.GET_CUSTOMER_STATS_RESPONSE,
        customerStats: data
    }
}

export function getApplicationByMonthsStats(params) {
    return {
        type: actionTypes.GET_MONTHS_APPLICATION_STATS_REQUEST,
        params
    }
}

export function getApplicationByMonthsStatsSuccess(data) {
    return {
        type: actionTypes.GET_MONTHS_APPLICATION_STATS_RESPONSE,
        monthlyStats: data.data
    }
}
