import { authConstants } from "../constants";
import { http, history } from "../helpers";

export const authActions = {
  login,
  logout,
};

function login(data) {
  return (dispatch) => {
    dispatch(request(authActions));

    http
      .post("auth/login", data)
      .then(function (response) {
        if (response.data.success) {
          let user = {
            ...response.data.data,
            token: response.headers["x-auth-token"],
          };
          localStorage.setItem("user", JSON.stringify(user));
          dispatch(success(user));
          history.push("/");
        } else {
          dispatch(failure(response.data.reason));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
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
