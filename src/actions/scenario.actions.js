import { scenarioConstants } from "../constants";
import { http, appConfig, history } from "../helpers";
import { errorHandlerActions } from "../actions";
import swal from "sweetalert";
export const scenarioActions = {
  createScenario,
  updateScenario,
  deleteScenario,
  getBaseScenario,
  getScenarios,
  getGranularData,
  runScenario,
};

function createScenario(data) {
  return (dispatch) => {
    dispatch(request());

    http
      .post(`/core/scenario`, data)
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data));
          swal({
            title: "Scenario created successfully",
            text:
              "Scenario has been created successfully would you like to run this scenario?",
            icon: "success",
            buttons: ["Cancel", "Run Scenario"],
            dangerMode: true,
          }).then((ok) => {
            if (ok) {
              history.push(`/run-scenario/${response.data.scenario_id}`);
            } else {
              history.push(`/scenarios-list/${data.session_id}`);
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
    return { type: scenarioConstants.CREATE_SCENARIO_REQUEST };
  }
  function success(data) {
    return { type: scenarioConstants.CREATE_SCENARIO_SUCCESS, data };
  }
  function failure(error) {
    return { type: scenarioConstants.CREATE_SCENARIO_FAILURE, error };
  }
}
function updateScenario(id) {
  return (dispatch) => {
    dispatch(request(id));
    http
      .get(`${appConfig.apiEndpoint}${appConfig.apiUrl}/scenario/${id}`)
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

  function request() {
    return { type: scenarioConstants.UPDATE_SCENARIO_REQUEST };
  }
  function success(data) {
    return { type: scenarioConstants.UPDATE_SCENARIO_SUCCESS, data };
  }
  function failure(error) {
    return { type: scenarioConstants.UPDATE_SCENARIO_FAILURE, error };
  }
}
function deleteScenario() {
  return (dispatch) => {
    dispatch(request());
    http
      .delete(`${appConfig.apiEndpoint}${appConfig.apiUrl}/scenario`)
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

  function request() {
    return { type: scenarioConstants.DELETE_SCENARIO_REQUEST };
  }
  function success(data) {
    return { type: scenarioConstants.DELETE_SCENARIO_SUCCESS, data };
  }
  function failure(error) {
    return { type: scenarioConstants.DELETE_SCENARIO_FAILURE, error };
  }
}

function getBaseScenario(session_id) {
  return (dispatch) => {
    dispatch(request());
    http
      .get(`/core/base-scenario-data/${session_id}`)
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

  function request() {
    return { type: scenarioConstants.GET_BASE_SCENARIO_REQUEST };
  }
  function success(data) {
    return { type: scenarioConstants.GET_BASE_SCENARIO_SUCCESS, data };
  }
  function failure(error) {
    return { type: scenarioConstants.GET_BASE_SCENARIO_FAILURE, error };
  }
}

function getScenarios(session_id) {
  return (dispatch) => {
    dispatch(request());
    http
      .get(`/core/scenarios-from-session/${session_id}`)
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

  function request() {
    return { type: scenarioConstants.GET_SCENARIOS_REQUEST };
  }
  function success(data) {
    return { type: scenarioConstants.GET_SCENARIOS_SUCCESS, data };
  }
  function failure(error) {
    return { type: scenarioConstants.GET_SCENARIOS_FAILURE, error };
  }
}
function getGranularData(data) {
  return (dispatch) => {
    dispatch(request());
    http
      .post(`/core/granular-table-concat`, data)
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

  function request() {
    return { type: scenarioConstants.GET_GRANULAR_DATA_REQUEST };
  }
  function success(data) {
    return { type: scenarioConstants.GET_GRANULAR_DATA_SUCCESS, data };
  }
  function failure(error) {
    return { type: scenarioConstants.GET_GRANULAR_DATA_FAILURE, error };
  }
}
function runScenario(scenario_id) {
  return (dispatch) => {
    dispatch(request());
    http
      .post(`/core/run-scenario`, { scenario_id })
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

  function request() {
    return { type: scenarioConstants.RUN_SCENARIO_REQUEST };
  }
  function success(data) {
    return { type: scenarioConstants.RUN_SCENARIO_SUCCESS, data };
  }
  function failure(error) {
    return { type: scenarioConstants.RUN_SCENARIO_FAILURE, error };
  }
}
