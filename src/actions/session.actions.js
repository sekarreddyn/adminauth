import { sessionConstants } from "../constants";
import { http, history } from "../helpers";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { errorHandlerActions, scenarioActions } from "../actions";
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
  searchSession,
  getSession,
  getSessionKpi,
};

function getSessions(pagable) {
  return (dispatch) => {
    dispatch(request(pagable));
    http
      .get(`/core/session`, {
        params: pagable,
      })
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
        dispatch(errorHandlerActions.handleHTTPError(error.response));
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

function searchSession(value) {
  return { type: sessionConstants.SEARCH_SESSION, value };
}
function createSession(data) {
  return (dispatch) => {
    dispatch(request());

    http
      .post(`/core/session`, data)
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data));

          swal({
            title: "Session created successfully",
            text:
              "Session has been created successfully would you like to create scenarios for this session?",
            icon: "success",
            buttons: ["Cancel", "Create Scenarios"],
            dangerMode: true,
          }).then((ok) => {
            if (ok) {
              history.push(`/create-scenario/${response.data.session_id}`);
            } else {
              history.push(`/`);
            }
          });
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
        dispatch(errorHandlerActions.handleHTTPError(error.response));
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
function updateSession(id, data) {
  return (dispatch) => {
    dispatch(request(data, id));
    http
      .put(`/core/session/${id}`, data)
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data));
          toast.success("Session updated successfully");
          history.push("/");
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
        dispatch(errorHandlerActions.handleHTTPError(error.response));
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
    dispatch(request(id));
    http
      .delete(`/core/session/${id}`)
      .then(function (response) {
        if (response.data) {
          dispatch(success(id));
          toast.success("Session deleted successfully");
        }
      })
      .catch(function (error) {
        dispatch(failure(id));
        dispatch(errorHandlerActions.handleHTTPError(error.response));
      });
  };

  function request(id) {
    return { type: sessionConstants.DELETE_SESSION_REQUEST, id };
  }
  function success(id) {
    return { type: sessionConstants.DELETE_SESSION_SUCCESS, id };
  }
  function failure(id) {
    return { type: sessionConstants.DELETE_SESSION_FAILURE, id };
  }
}
function getGroups(data) {
  return (dispatch) => {
    dispatch(request());
    http
      .post(`/core/base-group`, data)
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data.data));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
        dispatch(errorHandlerActions.handleHTTPError(error.response));
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
function getBusinessUnits(data) {
  return (dispatch) => {
    dispatch(request());
    http
      .post(`/core/base-business-unit`, data)
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data.data));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
        dispatch(errorHandlerActions.handleHTTPError(error.response));
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
function getCountries(data) {
  return (dispatch) => {
    dispatch(request());
    http
      .post(`/core/base-country`, data)
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data.data));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
        dispatch(errorHandlerActions.handleHTTPError(error.response));
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
function getBrands(data) {
  return (dispatch) => {
    dispatch(request());
    http
      .post(`/core/base-brand`, data)
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data.data));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
        dispatch(errorHandlerActions.handleHTTPError(error.response));
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
function getMediaTactics(data) {
  return (dispatch) => {
    dispatch(request());
    http
      .post(`/core/base-media-tactic`, data)
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data.data));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
        dispatch(errorHandlerActions.handleHTTPError(error.response));
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
function getSession(id) {
  return (dispatch) => {
    dispatch(request(id));
    http
      .get(`/core/session/${id}`)
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
        dispatch(errorHandlerActions.handleHTTPError(error.response));
      });
  };

  function request(pagable) {
    return { type: sessionConstants.GET_SESSION_REQUEST, pagable };
  }
  function success(data) {
    return { type: sessionConstants.GET_SESSION_SUCCESS, data };
  }
  function failure(error) {
    return { type: sessionConstants.GET_SESSION_FAILURE, error };
  }
}

function getSessionKpi(id, type) {
  return (dispatch) => {
    dispatch(request(id));
    http
      .get(`/core/session-kpi/${id}`)
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data));
          if (type === "list")
            dispatch(
              scenarioActions.getScenarios(id, [
                {
                  ...response.data,
                  scenario_title: "Base Scenario",
                },
              ])
            );
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
        dispatch(errorHandlerActions.handleHTTPError(error.response));
      });
  };

  function request(pagable) {
    return { type: sessionConstants.GET_SESSION_KPI_REQUEST, pagable };
  }
  function success(data) {
    return { type: sessionConstants.GET_SESSION_KPI_SUCCESS, data };
  }
  function failure(error) {
    return { type: sessionConstants.GET_SESSION_KPI_FAILURE, error };
  }
}
