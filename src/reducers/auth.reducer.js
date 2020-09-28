import { authConstants } from "../constants";

const initialState = {
  login: {
    loading: false,
    user: {
      email: "",
      name: "",
      profileImageUrl: "",
      mobileNo: "",
      timeZone: "",
      location: "",
      countryCode: null,
      locale: null,
    },
    error: null,
  },
  signup: {
    loading: null,
    error: null,
  },
  forget_password: {
    loading: null,
    error: null,
  },
};

export function auth(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true,
        },
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          user: action.user,
        },
      };
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          error: action.error,
        },
      };
    case authConstants.LOGOUT:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          user: {},
        },
        user: {},
      };
    case authConstants.SIGNUP_REQUEST:
      return {
        ...state,
        loggingIn: true,
        user: action.user,
        loading: true,
        signup: {
          ...state.signup,
          loading: true,
        },
      };
    case authConstants.SIGNUP_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        loading: false,
        user: action.user,
        signup: {
          ...state.signup,
          createDemodata: action.createDemodata,
          loading: false,
        },
      };
    case authConstants.SIGNUP_FAILURE:
      return {
        ...state,
        loggedIn: false,
        loggingIn: false,
        loading: false,
        error: action.error,
        signup: {
          ...state.signup,
          loading: false,
        },
      };
    case authConstants.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        forget_password: {
          ...state.forget_password,
          loading: true,
        },
      };
    case authConstants.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forget_password: {
          ...state.forget_password,
          loading: false,
          user: action.user,
        },
      };
    case authConstants.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forget_password: {
          ...state.forget_password,
          loading: false,
        },
      };

    default:
      return state;
  }
}
