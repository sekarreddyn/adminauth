let config = {};

if (process.env.baseURL) {
  config = {
    baseURL: process.env.REACT_APP_BASE_URL,
  };
} else {
  config = {
    baseURL: "https://mediasim.appngeek.com/",
  };
}

export const appConfig = {
  ...config,
};
