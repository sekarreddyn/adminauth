import { sessionConstants } from "../constants";
import { http, appConfig } from "../helpers";

export const sessionActions = {
  getSessions,
  createSession,
  updateSession,
  deleteSession,
  getGroups,
  getBusinessUnits,
  getCountries,
  getBrands,
  getMediaTactics,
};

function getSessions(pagable) {
  return (dispatch) => {
    dispatch(request(pagable));
    http
      .get(`${appConfig.apiEndpoint}${appConfig.apiUrl}sessions/`, {
        params: pagable,
      })
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
      });
  };

  function request(pagable) {
    return { type: sessionConstants.GET_ALL_SESSIONS_REQUEST, pagable };
  }
  function success(data) {
    return { type: sessionConstants.GET_ALL_SESSIONS_SUCCESS, data };
  }
  function failure(error) {
    return { type: sessionConstants.GET_ALL_SESSIONS_FAILURE, error };
  }
}
function createSession() {
  return (dispatch) => {
    dispatch(request());
    http
      .post(`${appConfig.apiEndpoint}${appConfig.apiUrl}session`)
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
      });
  };

  function request() {
    return { type: sessionConstants.CREATE_SESSION_REQUEST };
  }
  function success(data) {
    return { type: sessionConstants.CREATE_SESSION_SUCCESS, data };
  }
  function failure(error) {
    return { type: sessionConstants.CREATE_SESSION_FAILURE, error };
  }
}
function updateSession(data, id) {
  return (dispatch) => {
    dispatch(request(data, id));
    http
      .put(`${appConfig.apiEndpoint}${appConfig.apiUrl}session/${id}`, data)
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
      });
  };

  function request(pagable) {
    return { type: sessionConstants.UPDATE_SESSION_REQUEST, pagable };
  }
  function success(data) {
    return { type: sessionConstants.UPDATE_SESSION_SUCCESS, data };
  }
  function failure(error) {
    return { type: sessionConstants.UPDATE_SESSION_FAILURE, error };
  }
}
function deleteSession(id) {
  return (dispatch) => {
    dispatch(request());
    http
      .delete(`${appConfig.apiEndpoint}${appConfig.apiUrl}session${id}`)
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
      });
  };

  function request() {
    return { type: sessionConstants.DELETE_SESSION_REQUEST };
  }
  function success(data) {
    return { type: sessionConstants.DELETE_SESSION_SUCCESS, data };
  }
  function failure(error) {
    return { type: sessionConstants.DELETE_SESSION_FAILURE, error };
  }
}
function getGroups() {
  return (dispatch) => {
    dispatch(request());
    http
      .get(`${appConfig.apiEndpoint}${appConfig.apiUrl}groups`)
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
      });
  };

  function request() {
    return { type: sessionConstants.GET_GROUPS_REQUEST };
  }
  function success(data) {
    return { type: sessionConstants.GET_GROUPS_SUCCESS, data };
  }
  function failure(error) {
    return { type: sessionConstants.GET_GROUPS_FAILURE, error };
  }
}
function getBusinessUnits() {
  return (dispatch) => {
    dispatch(request());
    http
      .get(`${appConfig.apiEndpoint}${appConfig.apiUrl}business-units`)
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
      });
  };

  function request() {
    return { type: sessionConstants.GET_BUSINESS_UNITS_REQUEST };
  }
  function success(data) {
    return { type: sessionConstants.GET_BUSINESS_UNITS_SUCCESS, data };
  }
  function failure(error) {
    return { type: sessionConstants.GET_BUSINESS_UNITS_FAILURE, error };
  }
}
function getCountries() {
  return (dispatch) => {
    dispatch(request());
    http
      .get(`${appConfig.apiEndpoint}${appConfig.apiUrl}countries`)
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
      });
  };

  function request() {
    return { type: sessionConstants.GET_COUNTRIES_REQUEST };
  }
  function success(data) {
    return { type: sessionConstants.GET_COUNTRIES_SUCCESS, data };
  }
  function failure(error) {
    return { type: sessionConstants.GET_COUNTRIES_FAILURE, error };
  }
}
function getBrands() {
  return (dispatch) => {
    dispatch(request());
    http
      .get(`${appConfig.apiEndpoint}${appConfig.apiUrl}brands`)
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
      });
  };

  function request() {
    return { type: sessionConstants.GET_BRANDS_REQUEST };
  }
  function success(data) {
    return { type: sessionConstants.GET_BRANDS_SUCCESS, data };
  }
  function failure(error) {
    return { type: sessionConstants.GET_BRANDS_FAILURE, error };
  }
}
function getMediaTactics() {
  return (dispatch) => {
    dispatch(request());
    http
      .get(`${appConfig.apiEndpoint}${appConfig.apiUrl}media-tactic`)
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
      });
  };

  function request() {
    return { type: sessionConstants.GET_MEDIA_TACTICS_REQUEST };
  }
  function success(data) {
    return { type: sessionConstants.GET_MEDIA_TACTICS_SUCCESS, data };
  }
  function failure(error) {
    return { type: sessionConstants.GET_MEDIA_TACTICS_FAILURE, error };
  }
}
