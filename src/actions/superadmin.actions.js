import { superAdminConstants } from "../constants";
import { http, appConfig } from "../helpers";

export const superAdminActions = {
  getOrganizations,
};

function getOrganizations(pagable) {
  return (dispatch) => {
    dispatch(request(pagable));
    http
      .get(`${appConfig.apiEndpoint}${appConfig.apiUrl}user/`, {
        params: pagable,
      })
      .then(function (response) {
        if (response.data) {
          dispatch(success(response.data));
        }
      })
      .catch(function (error) {
        dispatch(failure(error));
      });
  };

  function request(pagable) {
    return { type: superAdminConstants.GET_ORGANIZATIONS_REQUEST, pagable };
  }
  function success(data) {
    return { type: superAdminConstants.GET_ORGANIZATIONS_SUCCESS, data };
  }
  function failure(error) {
    return { type: superAdminConstants.GET_ORGANIZATIONS_FAILURE, error };
  }
}
