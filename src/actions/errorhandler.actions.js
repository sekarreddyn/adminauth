import { errorhandlerConstants } from "../constants";
export const errorHandlerActions = {
  handleHTTPError,
};

function handleHTTPError(error) {
  if (error && error && error.status === 400) {
    return execute400Handler(error);
  } else if (error && error && error.status === 401) {
    return execute401Handler(error);
  } else if (error && error && error.status === 403) {
    return execute403Handler(error);
  } else if (error && error && error.status === 404) {
    return execute404Handler(error);
  } else if (error && error && error.status === 500) {
    return execute500Handler(error);
  } else if (error && error && error.status === 502) {
    return execute502Handler(error);
  } else if (error && error && error.status === 400) {
    return execute400Handler(error);
  } else if (!error) {
    return executeServerError(error);
  } else {
    return executeOtherErrorHandler(error);
  }

  function execute400Handler(error) {
    return {
      type: errorhandlerConstants.HTTP_400_ERROR,
      error: error,
    };
  }
  function execute401Handler(error) {
    return {
      type: errorhandlerConstants.HTTP_401_ERROR,
      error: error,
    };
  }
  function execute403Handler(error) {
    return {
      type: errorhandlerConstants.HTTP_403_ERROR,
      error: error,
    };
  }
  function execute404Handler(error) {
    return {
      type: errorhandlerConstants.HTTP_404_ERROR,
      error: error,
    };
  }
  function execute500Handler(error) {
    return {
      type: errorhandlerConstants.HTTP_500_ERROR,
      error: error,
    };
  }
  function execute502Handler(error) {
    return {
      type: errorhandlerConstants.HTTP_502_ERROR,
      error: error,
    };
  }
  function executeServerError(props) {
    return {
      type: errorhandlerConstants.HTTP_NETWORK_ERROR,
      props: props,
    };
  }
  function executeOtherErrorHandler(error) {
    return {
      type: errorhandlerConstants.HTTP_OTHER_ERROR,
      error: error,
    };
  }
}
