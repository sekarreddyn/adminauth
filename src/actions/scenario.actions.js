import { scenarioConstants } from "../constants";
import { http, appConfig, history } from "../helpers";
import { errorHandlerActions } from "../actions";
import { toast } from "react-toastify";
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
              history.push(
                `/run-scenario/${data.session_id}/${response.data.scenario_id}`
              );
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
function updateScenario(data) {
  return (dispatch) => {
    dispatch(request());
    http
      .get(`${appConfig.apiEndpoint}${appConfig.apiUrl}/scenario/`)
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
function deleteScenario(scenario_id) {
  return (dispatch) => {
    dispatch(request(scenario_id));
    http
      .delete(`/core/scenario/${scenario_id}`)
      .then(function (response) {
        if (response.data) {
          dispatch(success(scenario_id));
          toast.success("Scenario deleted successfully");
        }
      })
      .catch(function (error) {
        dispatch(failure(scenario_id));
        dispatch(errorHandlerActions.handleHTTPError(error.response));
      });
  };

  function request(scenario_id) {
    return { type: scenarioConstants.DELETE_SCENARIO_REQUEST, scenario_id };
  }
  function success(scenario_id) {
    return { type: scenarioConstants.DELETE_SCENARIO_SUCCESS, scenario_id };
  }
  function failure(scenario_id) {
    return { type: scenarioConstants.DELETE_SCENARIO_FAILURE, scenario_id };
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
        if (response.status === 200) {
          dispatch(success(response.data));
        }
      })
      .catch(function (error) {
        if (error && error.response && error.response.status === 409) {
          toast.success(error.response.data.message);
          dispatch(success([]));
        } else {
          dispatch(failure(error));
          dispatch(errorHandlerActions.handleHTTPError(error.response));
        }
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
