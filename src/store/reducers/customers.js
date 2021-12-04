import actionTypes from "../actionTypes";

const initialState = {
  error: null,
  isLoadingCalculateEmi: false,
  isLoadingGetVehicles: false,
  isLoadingGetApplication: false,
  summary: {},
  vehicleList: [],
  employmentTypeList: [],
  isLoadingGetApplicationInfo: false,
  isLoadingGetEmploymentTypes: false,
  isLoadingCreateProfileEmployment: false,
  isLoadingCreateCustomer: false,
  createdUser: {},
  isLoadingCalculateCde: false,
  cdeInfo: {},
  isLoadingActivateApplication: false,
  isLoadingCreateLoan: false,
  isLoadingCreateReference: false,
  isLoadingCreateGuarantor: false
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CALCULATE_EMI_REQUEST:
      return {
        ...state,
        isLoadingCalculateEmi: true,
        error: null,
      };

    case actionTypes.CALCULATE_EMI_RESPONSE:
      return {
        ...state,
        isLoadingCalculateEmi: false,
        error: action.error,
        summary: action.data.data.data,
      };

    case actionTypes.GET_VEHICLE_REQUEST:
      return {
        ...state,
        isLoadingGetVehicles: true,
        error: null,
      };

    case actionTypes.GET_VEHICLE_RESPONSE:
      return {
        ...state,
        isLoadingGetVehicles: false,
        error: action.error,
        vehicleList: action.list ? action.list.data : [],
      };

    case actionTypes.GET_EMPLOYMENT_TYPE_REQUEST:
      return {
        ...state,
        isLoadingGetEmploymentTypes: true,
        error: null,
      };

    case actionTypes.GET_EMPLOYMENT_TYPE_RESPONSE:
      return {
        ...state,
        isLoadingGetEmploymentTypes: false,
        error: action.error,
        employmentTypeList: action.list ? action.list.data : [],
      };

    case actionTypes.GET_EMPLOYMENT_TYPE_ONE_REQUEST:
      return {
        ...state,
        isLoadingGetEmploymentTypes1: true,
        error: null,
      };

    case actionTypes.GET_EMPLOYMENT_TYPE_ONE_RESPONSE:
      return {
        ...state,
        isLoadingGetEmploymentTypes1: false,
        error: action.error,
        employmentTypeList1: action.list ? action.list.data : [],
      };

    case actionTypes.GET_INDUSTRY_TYPE_REQUEST:
      return {
        ...state,
        isLoadingGetIndustryTypes: true,
        error: null,
      };

    case actionTypes.GET_INDUSTRY_TYPE_RESPONSE:
      return {
        ...state,
        isLoadingGetIndustryTypes: false,
        error: action.error,
        industryTypeList: action.list ? action.list.data : [],
      };
    case actionTypes.GET_INDUSTRY_TYPE_ONE_REQUEST:
      return {
        ...state,
        isLoadingGetIndustryTypes1: true,
        error: null,
      };

    case actionTypes.GET_INDUSTRY_TYPE_ONE_RESPONSE:
      return {
        ...state,
        isLoadingGetIndustryTypes1: false,
        error: action.error,
        industryTypeList1: action.list ? action.list.data : [],
      };

    case actionTypes.CREATE_APPLICATION_REQUEST:
      return {
        ...state,
        isLoadingCreateApplication: true,
        error: null,
      };

    case actionTypes.CREATE_APPLICATION_RESPONSE:
      return {
        ...state,
        createdApplication: action.application,
        isLoadingCreateApplication: false,
        error: action.error,
      };

    case actionTypes.GET_APPLICATION_REQUEST:
      return {
        ...state,
        isLoadingGetApplication: true,
        error: null,
      };

    case actionTypes.UPDATE_APPLICATION_STATUS_RESPONSE:
      return {
        ...state,
        application: action.application.data,
        error: null,
      };

    case actionTypes.GET_APPLICATION_RESPONSE:
      return {
        ...state,
        isLoadingGetApplication: false,
        error: action.error,
        application: action.application.data,
      };
    case actionTypes.GET_GUARANTOR_REQUEST:
      return {
        ...state,
        isLoadingGetGuarantor: true,
        error: null,
      };

    case actionTypes.GET_GUARANTOR_RESPONSE:
      return {
        ...state,
        isLoadingGetGuarantor: false,
        error: action.error,
        guarantorList: action.guarantors.data,
      };
    case actionTypes.GET_REFERENCE_REQUEST:
      return {
        ...state,
        isLoadingGetReference: true,
        error: null,
      };

    case actionTypes.GET_REFERENCE_RESPONSE:
      return {
        ...state,
        isLoadingGetReference: false,
        error: action.error,
        reference: action.reference.data,
      };

    case actionTypes.GET_PAYMENT_LIST_REQUEST:
      return {
        ...state,
        isLoadingGetPaymentList: true,
        error: null,
      };

    case actionTypes.GET_PAYMENT_LIST_RESPONSE:
      return {
        ...state,
        isLoadingGetPaymentList: false,
        error: action.error,
        paymentList: action.paymentList.data,
      };
    case actionTypes.GET_DOCUMENT_CATEGORY_REQUEST:
      return {
        ...state,
        isLoadingGetCategoryList: true,
        error: null,
      };

    case actionTypes.GET_DOCUMENT_CATEGORY_RESPONSE:
      return {
        ...state,
        isLoadingGetCategoryList: false,
        error: action.error,
        categoryList: action.categoryList.data || [],
      };
    case actionTypes.GET_DOCUMENT_LIST_REQUEST:
      return {
        ...state,
        isLoadingGetDocumentList: true,
        error: null,
      };

    case actionTypes.GET_DOCUMENT_LIST_RESPONSE:
      return {
        ...state,
        isLoadingGetDocumentList: false,
        error: action.error,
        documentList: action.list.data,
      };
    case actionTypes.GET_DOCUMENT_TYPE_REQUEST:
      return {
        ...state,
        isLoadingGetDocumentType: true,
        error: null,
      };

    case actionTypes.GET_DOCUMENT_TYPE_RESPONSE:
      return {
        ...state,
        isLoadingGetDocumentType: false,
        error: action.error,
        documentTypeList: action.list.data,
      };
      case actionTypes.UPDATE_DOCUMENT_REQUEST:
        return {
          ...state,
          isLoadingUpdateDocument: true,
          error: null,
          updatedDocument: {}
        };
  
      case actionTypes.UPDATE_DOCUMENT_RESPONSE:
        return {
          ...state,
          isLoadingUpdateDocument: false,
          error: action.error,
          updatedDocument: action.data.data,
        };
    case actionTypes.GET_PAYMENT_REQUEST:
      return {
        ...state,
        isLoadingGetPayment: true,
        error: null,
      };

    case actionTypes.GET_PAYMENT_RESPONSE:
      return {
        ...state,
        isLoadingGetPayment: false,
        error: action.error,
        paymentDetail: action.paymentDetail.data,
      };
    case actionTypes.GET_APPLICATION_INFO_REQUEST:
      return {
        ...state,
        isLoadingGetApplicationInfo: true,
        error: null,
      };

    case actionTypes.GET_APPLICATION_INFO_RESPONSE:
      return {
        ...state,
        isLoadingGetApplicationInfo: false,
        error: action.error,
        applicationInfo: action.applicationInfo.data,
      };

    case actionTypes.CREATE_PROFILE_EMPLOYMENT_REQUEST:
      return {
        ...state,
        isLoadingCreateProfileEmployment: true,
        error: null,
      };

    case actionTypes.CREATE_PROFILE_EMPLOYMENT_RESPONSE:
      return {
        ...state,
        isLoadingCreateProfileEmployment: false,
        error: action.error,
        //employmentInfo: action.employmentInfo.data
      };

    case actionTypes.UPDATE_CUSTOMER_REQUEST:
      return {
        ...state,
        error: null,
      };

    case actionTypes.UPDATE_CUSTOMER_RESPONSE:
      return {
        ...state,
        error: action.error,
        clientInfo: action.clientInfo,
      };
    case actionTypes.CREATE_CUSTOMER_DOCUMENT_REQUEST:
      return {
        ...state,
        error: null,
      };

    case actionTypes.CREATE_CUSTOMER_DOCUMENT_RESPONSE:
      return {
        ...state,
        error: action.error,
        documentInfo: action.data,
      };
    case actionTypes.CREATE_LOAN_REQUEST:
      return {
        ...state,
        isLoadingCreateLoan: true,
        error: null,
      };

    case actionTypes.CREATE_LOAN_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoadingCreateLoan: false,
        loanInfo: action.loanInfo.data,
      };
    case actionTypes.CREATE_GUARANTOR_REQUEST:
      return {
        ...state,
        isLoadingCreateGuarantor: true,
        error: null,
      };

    case actionTypes.CREATE_GUARANTOR_RESPONSE:
      return {
        ...state,
        isLoadingCreateGuarantor: false,
        error: action.error,
        guarantorInfo: action.guarantorInfo.data,
      };

    case actionTypes.CREATE_PROFILE_REFERENCE_REQUEST:
      return {
        ...state,
        isLoadingCreateReference: true,
        error: null,
      };

    case actionTypes.CREATE_PROFILE_REFERENCE_RESPONSE:
      return {
        ...state,
        isLoadingCreateReference: false,
        error: action.error,
        referenceInfo: action.referenceInfo.data,
      };

    case actionTypes.CREATE_CUSTOMERS_REQUEST:
      return {
        ...state,
        isLoadingCreateCustomer: true,
        error: null,
      };

    case actionTypes.CREATE_CUSTOMERS_RESPONSE:
      return {
        ...state,
        createdUser: action.user,
        isLoadingCreateCustomer: false,
        error: action.error,
      };

    case actionTypes.DATA_CLEAR_REQUEST:
      return {};

    case actionTypes.CALCULATE_CDE_REQUEST:
      return {
        ...state,
        isLoadingCalculateCde: true,
        error: null,
      };

    case actionTypes.CALCULATE_CDE_RESPONSE:
      return {
        ...state,
        cdeInfo: action.cdeInfo,
        isLoadingCalculateCde: false,
        error: action.error,
      };

    case actionTypes.ACTIVATE_APPLICATION_REQUEST:
      return {
        ...state,
        isLoadingActivateApplication: true,
        error: null,
      };

    case actionTypes.ACTIVATE_APPLICATION_RESPONSE:
      return {
        ...state,
        isLoadingActivateApplication: false,
        activateInfo: action.activateInfo,
        error: action.error,
      };

    case actionTypes.UPDATE_APPLICATION_LOAN_REQUEST:
      return {
        ...state,
        isLoadingUpdateLoan: true,
        error: null,
      };

    case actionTypes.UPDATE_APPLICATION_LOAN_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoadingUpdateLoan: false,
        updateInfo: {id: action.loanInfo.data.applicationId},
      };

    case actionTypes.UPDATE_APPLICATION_REFERENCE_REQUEST:
      return {
        ...state,
        isLoadingUpdateReference: true,
        error: null,
      };

    case actionTypes.UPDATE_APPLICATION_REFERENCE_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoadingUpdateReference: false,
        updateInfo: {id: action.referenceInfo.data.applicationId},
      };

    case actionTypes.GET_TRANSACTIONS_REQUEST:
      return {
        ...state,
        error: null,
      };

    case actionTypes.GET_TRANSACTIONS_RESPONSE:
      return {
        ...state,
        error: action.error,
        transactionList: action.transactionList.data,
      };

    case actionTypes.CREATE_TRANSACTION_REQUEST:
      return {
        ...state,
        error: null,
      };

    case actionTypes.CREATE_TRANSACTION_RESPONSE:
      return {
        ...state,
        error: action.error,
        transactionInfo: action.transactionInfo.data,
      };

    case actionTypes.GET_CUSTOMER_STATS_RESPONSE:
      return {
        ...state,
        error: action.error,
        customerStats: action.customerStats
      };
    
    case actionTypes.GET_MONTHS_APPLICATION_STATS_RESPONSE:
      return {
        ...state,
        error: action.error,
        monthlyStats: action.monthlyStats.data
      };

    default:
      return state;
  }
};

export default customerReducer;
