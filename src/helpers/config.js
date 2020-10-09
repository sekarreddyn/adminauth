let config = {};

if (process.env.baseURL) {
  config = {
    baseURL: process.env.REACT_APP_BASE_URL,
  };
} else {
  config = {
    baseURL: "http://23.98.131.109:5000/",
  };
}

export const appConfig = {
  ...config,
};
