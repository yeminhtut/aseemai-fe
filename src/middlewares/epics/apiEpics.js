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

// export const getCustomersEpic = (action$, state$) =>
//     action$.pipe(
//         ofType(actionTypes.GET_CUSTOMERS_REQUEST),
//         switchMap((action) => {
//             return from(api.getCustomers({ ...action.params })).pipe(
//                 map((response) =>
//                     customerActions.getCustomersSuccess(response.data)
//                 ),
//                 catchError((err) =>
//                     of(customerActions.getCustomersFailed(true, err))
//                 )
//             );
//         })
//     );


export const createDeveloperEpic = (action$) =>
    action$.pipe(
        ofType(actionTypes.CREATE_DEVELOPER_REQUEST),
        switchMap((action) => {
            return from(api.createDeveloper(action.params)).pipe(
                map((response) => {
                    return customerActions.createDeveloperSuccess(response.data);
                }),
                catchError((err) =>
                    of(actionTypes.CREATE_DEVELOPER_RESPONSE({}, err))
                )
            );
        })
    );


