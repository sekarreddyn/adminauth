import { scenarioConstants } from "../constants";
import { http, appConfig } from "../helpers";

export const scenarioActions = {
  createScenario,
  updateScenario,
  deleteScenario,
};

function createScenario() {
  return (dispatch) => {
    dispatch(request());
    http
      .get(`${appConfig.apiEndpoint}${appConfig.apiUrl}/scenario`)
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