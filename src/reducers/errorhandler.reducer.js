import { errorhandlerConstants } from "../constants";
import { toast } from "react-toastify";

const initialState = {
  error: {},
};

export function errorhandler(state = initialState, action) {
  switch (action.type) {
    case errorhandlerConstants.HTTP_400_ERROR:
      toast.error({
        message: "400 Bad Request",
      });
      return {
        ...state,
      };
    case errorhandlerConstants.HTTP_401_ERROR:
      // toast.error("401 Unauthorised");

      return {
        ...state,
      };
    case errorhandlerConstants.HTTP_403_ERROR:
      toast.error("403 Forbidden");
      return {
        ...state,
      };
    case errorhandlerConstants.HTTP_404_ERROR:
      toast.error("404 Not Found");
      return {
        ...state,
        error: action.error,
      };
    case errorhandlerConstants.HTTP_500_ERROR:
      toast.error("500 Internal Server Error");
      return {
        ...state,
      };
    case errorhandlerConstants.HTTP_502_ERROR:
      toast.error("502 Bad Gateway");
      return {
        ...state,
      };

    case errorhandlerConstants.HTTP_NETWORK_ERROR:
      toast.error("Something went wrong");
      return {
        ...state,
      };
    case errorhandlerConstants.HTTP_OTHER_ERROR:
      toast.error("Something went wrong");
      return {
        ...state,
        errorMessage: "Something went wrong",
      };

    default:
      return state;
  }
}
