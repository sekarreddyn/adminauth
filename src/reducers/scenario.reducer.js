import { scenarioConstants } from "../constants";
const initialState = {
  create_scenario: {
    loading: null,
  },
  update_scenario: {
    loading: null,
  },
  delete_scenario: {
    loading: false,
    id: null,
  },
  base_scenario: {
    data: [],
    loading: null,
  },
  scenarios: {
    data: [],
    loading: false,
    date: null,
  },
  scenario: {
    data: {
      scenario_id: null,
      session_id: null,
      scenario_title: "",
      scenario_description: "",
      scenario_sd: null,
      scenario_ed: null,
      is_max_vol: null,
      is_agg_constraint: null,
    },
    loading: false,
    date: null,
  },
  granular_data: {
    data: [],
    loading: null,
  },
  run_scenario: {
    data: [],
    loading: false,
    status: "",
    start_date: null,
    end_date: null,
  },

  get_scenario_kpi: {
    data: {
      media_spend: 0,
      media_shipments: 0,
      media_gross_profit: 0,
      media_volume: 0,
    },
    loading: null,
  },
  get_optimized_data: {
    data: [],
    loading: true,
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
          data: [],
          date: null,
        },
      };
    case scenarioConstants.GET_SCENARIOS_SUCCESS:
      return {
        ...state,
        scenarios: {
          data: action.data,
          loading: false,
          date: null,
        },
      };
    case scenarioConstants.GET_SCENARIOS_FAILURE:
      return {
        ...state,
        scenarios: {
          ...state.scenarios,
          loading: false,
          date: null,
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
    case scenarioConstants.GET_SCENARIO_REQUEST:
      return {
        ...state,
        scenario: {
          ...state.scenarios,
          loading: true,
        },
      };
    case scenarioConstants.GET_SCENARIO_SUCCESS:
      return {
        ...state,
        scenario: {
          ...state.scenarios,
          data: action.data,
        },
      };
    case scenarioConstants.GET_SCENARIO_FAILURE:
      return {
        ...state,
        scenario: {
          ...state.scenarios,
          loading: false,
        },
      };
    case scenarioConstants.GET_SCENARIO_KPI_REQUEST:
      return {
        ...state,
        get_scenario_kpi: {
          ...state.get_scenario_kpi,
          data: {
            media_spend: 0,
            media_shipments: 0,
            media_gross_profit: 0,
            media_volume: 0,
          },
          loading: true,
        },
      };
    case scenarioConstants.GET_SCENARIO_KPI_SUCCESS:
      return {
        ...state,
        get_scenario_kpi: {
          data: { ...action.data, date: new Date() },
          loading: false,
        },
      };
    case scenarioConstants.GET_SCENARIO_KPI_FAILURE:
      return {
        ...state,
        get_scenario_kpi: {
          ...state.get_scenario_kpi,
          loading: false,
        },
      };
    case scenarioConstants.GET_OPTIMIZED_DATA_REQUEST:
      return {
        ...state,
        get_optimized_data: {
          ...state.get_optimized_data,
          data: [],
          loading: true,
        },
      };
    case scenarioConstants.GET_OPTIMIZED_DATA_SUCCESS:
      return {
        ...state,
        get_optimized_data: {
          data: action.data,
          loading: false,
        },
      };
    case scenarioConstants.GET_OPTIMIZED_DATA_FAILURE:
      return {
        ...state,
        get_optimized_data: {
          ...state.get_optimized_data,
          loading: false,
        },
      };

    default:
      return state;
  }
}
