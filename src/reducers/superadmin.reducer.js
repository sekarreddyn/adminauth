import { superAdminConstants } from "../constants";

const initialState = {
  organization_list: {
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
    loading: false,
  },
};
export function superadmin(state = initialState, action) {
  switch (action.type) {
    case superAdminConstants.GET_ORGANIZATIONS_REQUEST:
      return {
        ...state,
        organization_list: {
          ...state.organization_list,
          data: {
            ...state.organization_list.data,
            current: action.pagable.pageNumber,
          },
          loading: true,
        },
      };
    case superAdminConstants.GET_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        organization_list: {
          ...state.organization_list,
          data: {
            ...action.data,
            current: action.data.number,
            total: action.data.totalElements,
            pageSize: action.data.size,
          },
          loading: false,
        },
      };
    case superAdminConstants.GET_ORGANIZATIONS_FAILURE:
      return {
        ...state,
        organization_list: {
          ...state.organization_list,
          loading: true,
        },
      };
    default:
      return state;
  }
}
