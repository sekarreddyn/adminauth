import { sessionConstants } from "../constants";
const initialState = {
  get_sessions: {
    data: {
      content: [],
      number: 0,
      numberOfElements: 0,
      size: 0,
      totalElements: 0,
      totalPages: 0,
      current: 0,
      total: 0,
      pageSize: 0,
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
        },
      };
    case sessionConstants.DELETE_SESSION_SUCCESS:
      return {
        ...state,
        delete_session: {
          loading: false,
        },
      };
    case sessionConstants.DELETE_SESSION_FAILURE:
      return {
        ...state,
        delete_session: {
          loading: true,
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
    default:
      return state;
  }
}
