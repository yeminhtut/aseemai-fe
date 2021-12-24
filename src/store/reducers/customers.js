import actionTypes from "../actionTypes";

const initialState = {
  error: null,
  createdDeveloper: {},
  isLoadingCreateDeveloper: false
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.CREATE_DEVELOPER_REQUEST:
      return {
        ...state,
        isLoadingCreateDeveloper: true,
        error: null,
      };

    case actionTypes.CREATE_DEVELOPER_RESPONSE:
      return {
        ...state,
        createdDeveloper: action.developer,
        isLoadingCreateDeveloper: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default customerReducer;
