import { authConstants } from "../constants";
import { http, history } from "../helpers";
import { errorHandlerActions } from "../actions";
export const authActions = {
  login,
  logout,
  signup,
  forgotPassword,
};

function login(data) {
  return (dispatch) => {
    dispatch(request(authActions));
    http
      .post("auth/login", data)
      .then(function (response) {
        if (response.status === 200) {
          let user = {
            ...response.data,
            token: response.data.Authorization,
          };
          history.push("/");
          localStorage.setItem("msuser", JSON.stringify(user));
          dispatch(success(user));
        } else {
          dispatch(failure(response.data.reason));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
        dispatch(errorHandlerActions.handleHTTPError(error.response));
      });
  };

  function request(user) {
    return { type: authConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: authConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: authConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  return (dispatch) => {
    localStorage.removeItem("user");
    dispatch({ type: authConstants.LOGOUT });
    history.push("/login");
  };
}

function signup(data) {
  return (dispatch) => {
    dispatch(request(authActions));
    http
      .post("auth/request-access", data)
      .then(function (response) {
        if (response.status === 200) {
          let user = {
            ...response.data,
            token: response.data.token,
          };
          localStorage.setItem("msuser", JSON.stringify(user));
          dispatch(success(user));
          history.push("/");
        } else {
          dispatch(failure(response.data.reason));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
        dispatch(errorHandlerActions.handleHTTPError(error.response));
      });
  };

  function request(user) {
    return { type: authConstants.SIGNUP_REQUEST, user };
  }
  function success(user) {
    return { type: authConstants.SIGNUP_SUCCESS, user };
  }
  function failure(error) {
    return { type: authConstants.SIGNUP_FAILURE, error };
  }
}

function forgotPassword(data) {
  return (dispatch) => {
    dispatch(request({ data }));
    http
      .post(`forgot-password`, data)
      .then(function (response) {
        if (response.status === 200) {
        }
        dispatch(success(response.data));
      })
      .catch(function (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.reason
        ) {
          dispatch(failure(error.response.data.reason));
        } else {
          dispatch(failure(error));
          dispatch(errorHandlerActions.handleHTTPError(error.response));
        }
      });
  };

  function request(user) {
    return { type: authConstants.FORGOT_PASSWORD_REQUEST, user };
  }
  function success(user) {
    return { type: authConstants.FORGOT_PASSWORD_SUCCESS, user };
  }
  function failure(error) {
    return { type: authConstants.FORGOT_PASSWORD_FAILURE, error };
  }
}
