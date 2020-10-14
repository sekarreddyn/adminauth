import { sessionConstants } from "../constants";
const initialState = {
  get_sessions: {
    data: [],
    loading: null,
  },
  get_session: {
    data: {
      bu_list: [],
      group_list: [],
      country_list: [],
      mt_list: [],
      brand_list: [],
      start_date: undefined,
      end_date: undefined,
      session_title: undefined,
      session_description: undefined,
    },
    loading: null,
  },
  get_session_kpi: {
    data: {
      media_spend: 0,
      media_shipments: 0,
      media_gross_profit: 0,
      media_volume: 0,
    },
    loading: null,
  },
  create_session: {
    loading: null,
  },
  update_session: {
    loading: null,
  },
  delete_session: {
    loading: null,
    id: null,
  },
  groups: {
    loading: null,
    data: [],
  },
  business_units: {
    loading: null,
    data: [],
  },
  countries: {
    loading: null,
    data: [],
  },
  brands: {
    loading: null,
    data: [],
  },
  media_tactics: {
    loading: null,
    data: [],
  },
};
export function session(state = initialState, action) {
  switch (action.type) {
    case sessionConstants.GET_ALL_SESSIONS_REQUEST:
      return {
        ...state,
        get_sessions: {
          loading: true,
        },
      };
    case sessionConstants.GET_ALL_SESSIONS_SUCCESS:
      return {
        ...state,
        get_sessions: {
          data: action.data,
          loading: false,
        },
      };
    case sessionConstants.GET_ALL_SESSIONS_FAILURE:
      return {
        ...state,
        get_sessions: {
          loading: true,
        },
      };

    case sessionConstants.SEARCH_SESSION: {
      const sessions = state.get_sessions.data.filter((item) =>
        item.session_title ? item.session_title.includes(action.value) : item
      );
      return {
        ...state,
        get_sessions: {
          data: sessions,
          loading: false,
        },
      };
    }
    case sessionConstants.CREATE_SESSION_REQUEST:
      return {
        ...state,
        create_session: {
          loading: true,
        },
      };
    case sessionConstants.CREATE_SESSION_SUCCESS:
      return {
        ...state,
        create_session: {
          loading: false,
        },
      };
    case sessionConstants.CREATE_SESSION_FAILURE:
      return {
        ...state,
        create_session: {
          loading: false,
        },
      };
    case sessionConstants.UPDATE_SESSION_REQUEST:
      return {
        ...state,
        update_session: {
          loading: true,
        },
      };
    case sessionConstants.UPDATE_SESSION_SUCCESS:
      return {
        ...state,
        update_session: {
          loading: false,
        },
      };
    case sessionConstants.UPDATE_SESSION_FAILURE:
      return {
        ...state,
        update_session: {
          loading: true,
        },
      };

    case sessionConstants.DELETE_SESSION_REQUEST:
      return {
        ...state,
        delete_session: {
          loading: true,
          id: action.id,
        },
      };
    case sessionConstants.DELETE_SESSION_SUCCESS:
      return {
        ...state,
        get_sessions: {
          data: state.get_sessions.data.filter(
            ({ session_id }) => session_id !== action.id
          ),
          loading: false,
        },
        delete_session: {
          loading: false,
          id: null,
        },
      };
    case sessionConstants.DELETE_SESSION_FAILURE:
      return {
        ...state,
        delete_session: {
          loading: true,
          id: null,
        },
      };

    case sessionConstants.GET_GROUPS_REQUEST:
      return {
        ...state,
        groups: {
          loading: true,
        },
      };
    case sessionConstants.GET_GROUPS_SUCCESS:
      return {
        ...state,
        groups: {
          data: action.data,
          loading: false,
        },
      };
    case sessionConstants.GET_GROUPS_FAILURE:
      return {
        ...state,
        groups: {
          loading: true,
        },
      };

    case sessionConstants.GET_BUSINESS_UNITS_REQUEST:
      return {
        ...state,
        business_units: {
          loading: true,
        },
      };
    case sessionConstants.GET_BUSINESS_UNITS_SUCCESS:
      return {
        ...state,
        business_units: {
          data: action.data,
          loading: false,
        },
      };
    case sessionConstants.GET_BUSINESS_UNITS_FAILURE:
      return {
        ...state,
        business_units: {
          loading: true,
        },
      };

    case sessionConstants.GET_COUNTRIES_REQUEST:
      return {
        ...state,
        countries: {
          loading: true,
        },
      };
    case sessionConstants.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: {
          data: action.data,
          loading: false,
        },
      };
    case sessionConstants.GET_COUNTRIES_FAILURE:
      return {
        ...state,
        countries: {
          loading: true,
        },
      };
    case sessionConstants.GET_BRANDS_REQUEST:
      return {
        ...state,
        brands: {
          loading: true,
        },
      };
    case sessionConstants.GET_BRANDS_SUCCESS:
      return {
        ...state,
        brands: {
          data: action.data,
          loading: false,
        },
      };
    case sessionConstants.GET_BRANDS_FAILURE:
      return {
        ...state,
        brands: {
          loading: true,
        },
      };

    case sessionConstants.GET_MEDIA_TACTICS_REQUEST:
      return {
        ...state,
        media_tactics: {
          loading: true,
        },
      };
    case sessionConstants.GET_MEDIA_TACTICS_SUCCESS:
      return {
        ...state,
        media_tactics: {
          data: action.data,
          loading: false,
        },
      };
    case sessionConstants.GET_MEDIA_TACTICS_FAILURE:
      return {
        ...state,
        media_tactics: {
          loading: true,
        },
      };

    case sessionConstants.GET_SESSION_REQUEST:
      return {
        ...state,
        get_session: {
          ...state.get_session,
          loading: true,
        },
      };
    case sessionConstants.GET_SESSION_SUCCESS:
      return {
        ...state,
        get_session: {
          data: { ...action.data, data: new Date() },
          loading: false,
        },
      };
    case sessionConstants.GET_SESSION_FAILURE:
      return {
        ...state,
        get_session: {
          ...state.get_session,
          loading: true,
        },
      };
    case sessionConstants.GET_SESSION_KPI_REQUEST:
      return {
        ...state,
        get_session_kpi: {
          ...state.get_session_kpi,
          loading: true,
        },
      };
    case sessionConstants.GET_SESSION_KPI_SUCCESS:
      return {
        ...state,
        get_session_kpi: {
          data: { ...action.data, date: new Date() },
          loading: false,
        },
      };
    case sessionConstants.GET_SESSION_KPI_FAILURE:
      return {
        ...state,
        get_session_kpi: {
          ...state.get_session_kpi,
          loading: true,
        },
      };
    default:
      return state;
  }
}
