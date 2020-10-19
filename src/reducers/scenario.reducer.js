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
    id: null,
  },
  base_scenario: {
    data: [],
    loading: null,
  },
  scenarios: {
    data: [],
    loading: false,
  },
  granular_data: {
    data: [],
    loading: null,
  },
  run_scenario: {
    data: [],
    loading: false,
    status: [],
    start_date: null,
    end_date: null,
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
          loading: false,
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
          loading: false,
        },
      };

    case scenarioConstants.DELETE_SCENARIO_REQUEST:
      return {
        ...state,
        delete_scenario: {
          loading: true,
          id: action.scenario_id,
        },
      };
    case scenarioConstants.DELETE_SCENARIO_SUCCESS:
      return {
        ...state,
        delete_scenario: {
          loading: false,
          id: null,
        },
        scenarios: {
          data: state.scenarios.data.filter(
            ({ scenario_id }) => scenario_id !== action.scenario_id
          ),
          date: new Date(),
          loading: false,
        },
      };
    case scenarioConstants.DELETE_SCENARIO_FAILURE:
      return {
        ...state,
        delete_scenario: {
          loading: false,
          id: null,
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
          loading: false,
        },
      };
    case scenarioConstants.GET_SCENARIOS_REQUEST:
      return {
        ...state,
        scenarios: {
          loading: true,
        },
      };
    case scenarioConstants.GET_SCENARIOS_SUCCESS:
      return {
        ...state,
        scenarios: {
          data: action.data,
          loading: false,
        },
      };
    case scenarioConstants.GET_SCENARIOS_FAILURE:
      return {
        ...state,
        scenarios: {
          loading: false,
        },
      };
    case scenarioConstants.GET_GRANULAR_DATA_REQUEST:
      return {
        ...state,
        granular_data: {
          loading: true,
        },
      };
    case scenarioConstants.GET_GRANULAR_DATA_SUCCESS:
      return {
        ...state,
        granular_data: {
          data: action.data,
          loading: false,
        },
      };
    case scenarioConstants.GET_GRANULAR_DATA_FAILURE:
      return {
        ...state,
        granular_data: {
          loading: false,
        },
      };
    case scenarioConstants.RUN_SCENARIO_REQUEST:
      return {
        ...state,
        run_scenario: {
          data: [],
          loading: true,
          status: "started",
          start_date: new Date().toLocaleString(),
        },
      };
    case scenarioConstants.RUN_SCENARIO_SUCCESS:
      return {
        ...state,
        run_scenario: {
          ...state.run_scenario,
          data: action.data,
          loading: false,
          status: "completed",
          end_date: new Date().toLocaleString(),
        },
      };
    case scenarioConstants.RUN_SCENARIO_FAILURE:
      return {
        ...state,
        run_scenario: {
          ...state.run_scenario,
          data: [],
          loading: false,
          status: "failed",
          end_date: new Date().toLocaleString(),
        },
      };
    default:
      return state;
  }
}
