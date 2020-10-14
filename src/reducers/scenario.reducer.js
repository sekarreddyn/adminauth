import { scenarioConstants } from "../constants";
const initialState = {
  create_scenario: {
    loading: null,
  },
  update_scenario: {
    loading: null,
  },
  delete_scenario: {
    loading: null,
  },
  base_scenario: {
    data: [],
    loading: null,
  },
};
export function scenario(state = initialState, action) {
  switch (action.type) {
    case scenarioConstants.CREATE_SCENARIO_REQUEST:
      return {
        ...state,
        create_scenario: {
          loading: true,
        },
      };
    case scenarioConstants.CREATE_SCENARIO_SUCCESS:
      return {
        ...state,
        create_scenario: {
          loading: false,
        },
      };
    case scenarioConstants.CREATE_SCENARIO_FAILURE:
      return {
        ...state,
        create_scenario: {
          loading: true,
        },
      };
    case scenarioConstants.UPDATE_SCENARIO_REQUEST:
      return {
        ...state,
        update_scenario: {
          loading: true,
        },
      };
    case scenarioConstants.UPDATE_SCENARIO_SUCCESS:
      return {
        ...state,
        update_scenario: {
          loading: false,
        },
      };
    case scenarioConstants.UPDATE_SCENARIO_FAILURE:
      return {
        ...state,
        update_scenario: {
          loading: true,
        },
      };

    case scenarioConstants.DELETE_SCENARIO_REQUEST:
      return {
        ...state,
        delete_scenario: {
          loading: true,
        },
      };
    case scenarioConstants.DELETE_SCENARIO_SUCCESS:
      return {
        ...state,
        delete_scenario: {
          loading: false,
        },
      };
    case scenarioConstants.DELETE_SCENARIO_FAILURE:
      return {
        ...state,
        delete_scenario: {
          loading: true,
        },
      };
    case scenarioConstants.GET_BASE_SCENARIO_REQUEST:
      return {
        ...state,
        base_scenario: {
          loading: true,
        },
      };
    case scenarioConstants.GET_BASE_SCENARIO_SUCCESS:
      return {
        ...state,
        base_scenario: {
          data: action.data,
          loading: false,
        },
      };
    case scenarioConstants.GET_BASE_SCENARIO_FAILURE:
      return {
        ...state,
        base_scenario: {
          loading: true,
        },
      };
    default:
      return state;
  }
}
