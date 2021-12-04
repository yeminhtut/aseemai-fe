import _concat from "lodash/concat";
import { of, from, forkJoin } from "rxjs";
import { map, switchMap, catchError, mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";
import actionTypes from "../../store/actionTypes";
import * as authActions from "../../store/actions/auth";
import * as customerActions from "../../store/actions/customer";
import * as commonActions from "../../store/actions/common";
import * as userActions from "../../store/actions/users";
import * as api from "../../api";

export const updateLoanEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.UPDATE_APPLICATION_LOAN_REQUEST),
        switchMap((action) => {
            return from(api.updateLoan(action.params)).pipe(
                map((response) =>
                    customerActions.updateLoanSuccess(response.data)
                ),
                catchError((err) =>
                    of(customerActions.updateLoanSuccess(true, err))
                )
            );
        })
    );

export const loginEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.LOGIN_REQUEST),
        mergeMap((action) =>
            from(api.login(action.payload.email, action.payload.password)).pipe(
                map((response) => {
                    return authActions.loginResponse(response.data);
                }),
                catchError((error) => of(authActions.loginResponse({}, error)))
            )
        )
    );

export const updateUserEulaEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.UPDATE_USER_EULA_REQUEST),
        mergeMap((action) =>
            from(api.updateUserEula(action.payload)).pipe(
                map((response) => {
                    return userActions.updateUserEulaSuccess(response.data);
                }),
                catchError((error) =>
                    of(userActions.updateUserEulaSuccess({}, error))
                )
            )
        )
    );

export const getCurrentUserEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.GET_CURRENT_USER),
        switchMap(() => {
            return from(api.getCurrentUser()).pipe(
                map((response) => authActions.setCurrentUser(response.data)),
                catchError((err) => of(authActions.setCurrentUser(true, err)))
            );
        })
    );

export const activateApplicationEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.UPDATE_APPLICATION_STATUS_REQUEST),
        mergeMap((action) =>
            from(api.updateApplicationStatus(action.params)).pipe(
                map((response) => {
                    return customerActions.updateApplicationStatusSuccess(
                        response.data
                    );
                }),
                catchError((error) =>
                    of(
                        customerActions.updateApplicationStatusSuccess(
                            {},
                            error
                        )
                    )
                )
            )
        )
    );

export const updateApplication = (action$) =>
    action$.pipe(
        ofType(actionTypes.ACTIVATE_APPLICATION_REQUEST),
        mergeMap((action) => {
            return from(api.activateApplication(action.params)).pipe(
                map((response) => {
                    return customerActions.activateApplicationSuccess(
                        response.data
                    );
                }),
                catchError((error) =>
                    of(customerActions.activateApplicationSuccess({}, error))
                )
            );
        })
    );

export const getCustomersEpic = (action$, state$) =>
    action$.pipe(
        ofType(actionTypes.GET_CUSTOMERS_REQUEST),
        switchMap((action) => {
            return from(api.getCustomers({ ...action.params })).pipe(
                map((response) =>
                    customerActions.getCustomersSuccess(response.data)
                ),
                catchError((err) =>
                    of(customerActions.getCustomersFailed(true, err))
                )
            );
        })
    );

export const getApplicationsEpic = (action$, state$) =>
    action$.pipe(
        ofType(actionTypes.GET_APPLICATION_LIST_REQUEST),
        switchMap((action) => {
            return from(api.getApplications({ ...action.params })).pipe(
                map((response) =>
                    customerActions.getApplicationListSuccess(response.data)
                ),
                catchError((err) =>
                    of(customerActions.getApplicationListSuccess(true, err))
                )
            );
        })
    );

export const createCustomerEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.CREATE_CUSTOMERS_REQUEST),
        switchMap((action) => {
            return from(api.createCustomer(action.params)).pipe(
                map((response) => {
                    return customerActions.createCustomerSuccess(response.data);
                }),
                catchError((err) =>
                    of(actionTypes.CREATE_CUSTOMERS_RESPONSE({}, err))
                )
            );
        })
    );

export const calcualteEmiEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.CALCULATE_EMI_REQUEST),
        switchMap((action) => {
            return from(api.calculateEmi(action.params)).pipe(
                map((response) => {
                    return customerActions.calculateEmiSuccess(response.data);
                }),
                catchError((err) =>
                    of(actionTypes.CALCULATE_EMI_RESPONSE({}, err))
                )
            );
        })
    );
export const uploadCustomerDocument = (action$) =>
    action$.pipe(
        ofType(actionTypes.CREATE_CUSTOMER_DOCUMENT_REQUEST),
        switchMap((action) => {
            return from(api.createCustomerDocument(action.data)).pipe(
                map((response) => {
                    return customerActions.createCustomerDocumentSuccess(
                        response.data
                    );
                }),
                catchError((err) =>
                    of(actionTypes.CREATE_CUSTOMER_DOCUMENT_RESPONSE({}, err))
                )
            );
        })
    );

export const getVehiclesEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.GET_VEHICLE_REQUEST),
        switchMap((action) => {
            return from(api.getVehcile()).pipe(
                map((response) =>
                    customerActions.getVehiclesResponse(response.data)
                ),
                catchError((err) =>
                    of(customerActions.getVehiclesResponse(true, err))
                )
            );
        })
    );

export const getCitiesEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.GET_CITIES_REQUEST),
        switchMap(() => {
            return from(api.getCities()).pipe(
                map((response) =>
                    commonActions.getCitiesSuccess(response.data)
                ),
                catchError((err) =>
                    of(commonActions.getCitiesSuccess(true, err))
                )
            );
        })
    );

export const getEmploymentTypesEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.GET_EMPLOYMENT_TYPE_REQUEST),
        switchMap(() => {
            return from(api.getEmploymentTypes()).pipe(
                map((response) =>
                    customerActions.getEmploymentTypesSuccess(response.data)
                ),
                catchError((err) =>
                    of(customerActions.getEmploymentTypesSuccess(true, err))
                )
            );
        })
    );
export const getEmploymentTypes1Epic = (action$) =>
    action$.pipe(
        ofType(actionTypes.GET_EMPLOYMENT_TYPE_ONE_REQUEST),
        switchMap(() => {
            return from(api.getEmploymentTypes()).pipe(
                map((response) =>
                    customerActions.getEmploymentTypes1Success(response.data)
                ),
                catchError((err) =>
                    of(customerActions.getEmploymentTypes1Success(true, err))
                )
            );
        })
    );

export const createApplicationEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.CREATE_APPLICATION_REQUEST),
        switchMap((action) => {
            return from(api.createApplication(action.params)).pipe(
                map((response) => {
                    return customerActions.createApplicationSuccess(
                        response.data
                    );
                }),
                catchError((err) =>
                    of(actionTypes.CREATE_APPLICATION_RESPONSE({}, err))
                )
            );
        })
    );

export const verifyOtpEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.VERIFY_OTP_REQUEST),
        switchMap((action) => {
            return from(api.verifyOtp(action.params)).pipe(
                map((response) => {
                    return commonActions.verifyOtpSuccess(response.data);
                }),
                catchError((err) =>
                    of(actionTypes.VERIFY_OTP_RESPONSE({}, err))
                )
            );
        })
    );

export const createguarantorEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.CREATE_GUARANTOR_REQUEST),
        switchMap((action) => {
            return from(api.createGuarantor(action.params)).pipe(
                map((response) => {
                    return customerActions.createGuarantorSuccess(
                        response.data
                    );
                }),
                catchError((err) =>
                    of(actionTypes.CREATE_GUARANTOR_RESPONSE({}, err))
                )
            );
        })
    );

export const getIndustryTypeByIdEpic = (action$, state$) =>
    action$.pipe(
        ofType(actionTypes.GET_INDUSTRY_TYPE_REQUEST),
        switchMap((action) => {
            return from(api.industryTypeById(action.params)).pipe(
                map((response) =>
                    customerActions.getIndustryTypeSuccess(response.data)
                ),
                catchError((err) =>
                    of(actionTypes.GET_INDUSTRY_TYPE_RESPONSE({}, err))
                )
            );
        })
    );
export const updateDocument = (action$) =>
    action$.pipe(
        ofType(actionTypes.UPDATE_DOCUMENT_REQUEST),
        switchMap((action) => {
            return from(api.updateDocument(action.params)).pipe(
                map((response) => {
                    return customerActions.updateDocumentSuccess(response.data);
                }),
                catchError((err) =>
                    of(actionTypes.UPDATE_DOCUMENT_RESPONSE({}, err))
                )
            );
        })
    );

export const getDocumentCategory = (action$, state$) =>
    action$.pipe(
        ofType(actionTypes.GET_DOCUMENT_CATEGORY_REQUEST),
        switchMap((action) => {
            return from(api.documentCategoryList(action.params)).pipe(
                map((response) =>
                    customerActions.getDocumentCategorySuccess(response.data)
                ),
                catchError((err) =>
                    of(actionTypes.GET_DOCUMENT_CATEGORY_RESPONSE({}, err))
                )
            );
        })
    );

export const getDocumentTypeList = (action$, state$) =>
    action$.pipe(
        ofType(actionTypes.GET_DOCUMENT_TYPE_REQUEST),
        switchMap((action) => {
            return from(api.documentTypeList(action.params)).pipe(
                map((response) =>
                    customerActions.getDocumentTypeListSuccess(response.data)
                ),
                catchError((err) =>
                    of(actionTypes.GET_DOCUMENT_TYPE_RESPONSE({}, err))
                )
            );
        })
    );

export const getIndustryType1ByIdEpic = (action$, state$) =>
    action$.pipe(
        ofType(actionTypes.GET_INDUSTRY_TYPE_ONE_REQUEST),
        switchMap((action) => {
            return from(api.industryTypeById(action.params)).pipe(
                map((response) =>
                    customerActions.getIndustryType1Success(response.data)
                ),
                catchError((err) =>
                    of(actionTypes.GET_INDUSTRY_TYPE_ONE_RESPONSE({}, err))
                )
            );
        })
    );

export const getGuarantorsByIdEpic = (action$, state$) =>
    action$.pipe(
        ofType(actionTypes.GET_GUARANTOR_REQUEST),
        switchMap((action) => {
            return from(api.getGuarantorsById(action.params)).pipe(
                map((response) =>
                    customerActions.getGuarantorSuccess(response.data)
                ),
                catchError((err) =>
                    of(actionTypes.GET_GUARANTOR_RESPONSE({}, err))
                )
            );
        })
    );

export const getApplicationByIdEpic = (action$, state$) =>
    action$.pipe(
        ofType(actionTypes.GET_APPLICATION_REQUEST),
        switchMap((action) => {
            return from(api.getApplicationById(action.params)).pipe(
                map((response) =>
                    customerActions.getApplicationSuccess(response.data)
                ),
                catchError((err) =>
                    of(actionTypes.GET_APPLICATION_RESPONSE({}, err))
                )
            );
        })
    );
export const getPaymentListById = (action$, state$) =>
    action$.pipe(
        ofType(actionTypes.GET_PAYMENT_LIST_REQUEST),
        switchMap((action) => {
            return from(api.getPaymentListById(action.params)).pipe(
                map((response) =>
                    customerActions.getPaymentListSuccess(response.data)
                ),
                catchError((err) =>
                    of(actionTypes.GET_PAYMENT_LIST_RESPONSE({}, err))
                )
            );
        })
    );

export const getDocumentListById = (action$, state$) =>
    action$.pipe(
        ofType(actionTypes.GET_DOCUMENT_LIST_REQUEST),
        switchMap((action) => {
            return from(api.getDocumentListById(action.params)).pipe(
                map((response) =>
                    customerActions.getDocumentListSuccess(response.data)
                ),
                catchError((err) =>
                    of(actionTypes.GET_DOCUMENT_LIST_RESPONSE({}, err))
                )
            );
        })
    );
export const getPaymentDetailById = (action$, state$) =>
    action$.pipe(
        ofType(actionTypes.GET_PAYMENT_REQUEST),
        switchMap((action) => {
            return from(api.getPaymentDetailById(action.params)).pipe(
                map((response) =>
                    customerActions.getPaymentDetailSuccess(response.data)
                ),
                catchError((err) =>
                    of(actionTypes.GET_PAYMENT_RESPONSE({}, err))
                )
            );
        })
    );
export const getReferenceById = (action$, state$) =>
    action$.pipe(
        ofType(actionTypes.GET_REFERENCE_REQUEST),
        switchMap((action) => {
            return from(api.getReferenceById(action.params)).pipe(
                map((response) =>
                    customerActions.getReferenceSuccess(response.data)
                ),
                catchError((err) =>
                    of(actionTypes.GET_REFERENCE_RESPONSE({}, err))
                )
            );
        })
    );

export const getApplicationInfoEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.GET_APPLICATION_INFO_REQUEST),
        switchMap((action) => {
            return from(api.getApplicationInfo({ ...action.params })).pipe(
                map((response) =>
                    customerActions.getApplicationInfoSuccess(response.data)
                ),
                catchError((err) =>
                    of(customerActions.getApplicationInfoSuccess(true, err))
                )
            );
        })
    );

export const createProfileEmploymentEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.CREATE_PROFILE_EMPLOYMENT_REQUEST),
        mergeMap((action) => {
            let concatenated = _concat(
                from(api.createProfile(action.params)),
                from(api.createEmployment(action.params))
            );

            return forkJoin(concatenated).pipe(
                map((response) => {
                    return customerActions.updateCustomer({ profile: response[0].data.data, employment: response[1].data.data});
                }),
                catchError((err) =>
                    of(customerActions.createProfileEmploymentSuccess(err, {}))
                )
            );
        })
    );

export const updateCustomerEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.UPDATE_CUSTOMER_REQUEST),
        mergeMap((action) => {
            return from(api.updateCustomerEmployment(action.params)).pipe(
                map((response) => {
                    return customerActions.updateCustomerSuccess(response.data);
                }),
                catchError((error) =>
                    of(customerActions.updateCustomerSuccess({}, error))
                )
            )
        })
    );

export const createLoanEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.CREATE_LOAN_REQUEST),
        switchMap((action) => {
            return from(api.createLoan(action.params)).pipe(
                map((response) => {
                    return customerActions.updateApplication(response.data);
                }),
                catchError((err) =>
                    of(actionTypes.CREATE_LOAN_RESPONSE({}, err))
                )
            );
        })
    );

export const updateApplicationEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.UPDATE_APPLICATION_REQUEST),
        mergeMap((action) =>
            from(api.updateApplication(action.params)).pipe(
                map((response) => {
                    return customerActions.createLoanSuccess(response.data);
                }),
                catchError((error) =>
                    of(customerActions.createLoanSuccess({}, error))
                )
            )
        )
    );

export const getEulaEpic = (action$, state$) =>
    action$.pipe(
        ofType(actionTypes.GET_EULA_REQUEST),
        switchMap(() => {
            return from(api.getEula()).pipe(
                map((response) => authActions.getEulaSuccess(response.data)),
                catchError((err) => of(authActions.getEulaSuccess(true, err)))
            );
        })
    );

export const createReferenceEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.CREATE_PROFILE_REFERENCE_REQUEST),
        mergeMap((action) => {
            let concatenated = _concat(
                from(api.createReference(action.params.referenceOne)),
                from(api.createReference(action.params.referenceTwo))
            );

            return forkJoin(concatenated).pipe(
                map((response) => {
                    return customerActions.createProfileReferenceSuccess(
                        response[0].data
                    );
                }),
                catchError((err) =>
                    of(customerActions.createProfileEmploymentSuccess(err, {}))
                )
            );
        })
    );

export const calculateCdeEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.CALCULATE_CDE_REQUEST),
        switchMap((action) => {
            return from(api.calculateCde(action.params)).pipe(
                map((response) =>
                    customerActions.calculateCdeSuccess(response.data)
                ),
                catchError((err) =>
                    of(customerActions.calculateCdeSuccess(true, err))
                )
            );
        })
    );

export const updateReferenceEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.UPDATE_APPLICATION_REFERENCE_REQUEST),
        mergeMap((action) => {
            let concatenated = _concat(
                from(api.updateReference(action.params.data[0])),
                from(api.updateReference(action.params.data[1]))
            );

            return forkJoin(concatenated).pipe(
                map((response) => {
                    return customerActions.updateApplicationReferenceSuccess(
                        response[0].data
                    );
                }),
                catchError((err) =>
                    of(customerActions.updateApplicationReferenceSuccess(err, {}))
                )
            );
        })
    );

export const updateGuarantorEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.UPDATE_APPLICATION_GUARANTOR_REQUEST),
        mergeMap((action) => {
            let concatenated = ''
            if (action.params.data.length > 1) {
                concatenated = _concat(
                    from(api.updateGuarantor(action.params.data[0])),
                    from(api.updateGuarantor(action.params.data[1]))
                );
            }
            else {
                concatenated = _concat(
                    from(api.updateGuarantor(action.params.data[0]))
                );
            }
            return forkJoin(concatenated).pipe(
                map((response) => {
                    return customerActions.updateApplicationGuarantorSuccess(
                        response[0].data
                    );
                }),
                catchError((err) =>
                    of(customerActions.updateApplicationGuarantorSuccess(err, {}))
                )
            );
        })
    );

export const getTransctionsEpic = (action$, state$) =>
    action$.pipe(
        ofType(actionTypes.GET_TRANSACTIONS_REQUEST),
        switchMap((action) => {
            return from(api.getTransctions(action.params)).pipe(
                map((response) =>
                    customerActions.getTransctionsByStringIdSuccess(response.data)
                ),
                catchError((err) =>
                    of(actionTypes.GET_TRANSACTIONS_RESPONSE({}, err))
                )
            );
        })
    );

export const createTransactionEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.CREATE_TRANSACTION_REQUEST),
        switchMap((action) => {
            return from(api.createTransaction(action.data)).pipe(
                map((response) => {
                    return customerActions.createTransctionSuccess(response.data);
                }),
                catchError((err) =>
                    of(actionTypes.CREATE_TRANSACTION_RESPONSE({}, err))
                )
            );
        })
    );

export const getCustomerStatsEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.GET_CUSTOMER_STATS_REQUEST),
        mergeMap((action) => {
            let concatenated = _concat(
                from(api.getCurrMonthCustomerCount(action.params)),
                from(api.getCurrMonthApplicationStats(action.params))
            );

            return forkJoin(concatenated).pipe(
                map((response) => {
                    return customerActions.getCurrMonthCustomerStatsSuccess({...response[1].data.data, ...response[0].data.data });
                }),
                catchError((err) =>
                    of(customerActions.getCurrMonthCustomerStatsSuccess(err, {}))
                )
            );
        })
    );

export const getApplicationByMonthsStatsEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.GET_MONTHS_APPLICATION_STATS_REQUEST),
        switchMap((action) => {
            return from(api.getApplicationByMonthsStats()).pipe(
                map((response) =>
                    customerActions.getApplicationByMonthsStatsSuccess(response.data)
                ),
                catchError((err) =>
                    of(actionTypes.getApplicationByMonthsStatsSuccess({}, err))
                )
            );
        })
    );

export const getOutletsEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.GET_OUTLETS_REQUEST),
        switchMap(() => {
            return from(api.getOutlets()).pipe(
                map((response) =>
                    commonActions.getOutletsSuccess(response.data)
                ),
                catchError((err) =>
                    of(commonActions.getOutletsSuccess(true, err))
                )
            );
        })
    );


