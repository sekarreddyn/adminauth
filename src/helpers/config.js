let config = {};

if (process.env.REACT_APP_API_ENDPOINT) {
  config = {
    apiEndpoint: process.env.REACT_APP_API_ENDPOINT,
    apiUrl: process.env.REACT_APP_API_VERSION,
  };
} else {
  config = {
    apiEndpoint: "https://dev2.api.geekassess.com/",
    apiUrl: "api/v1/",
  };
}

export const appConfig = {
  ...config,
};
