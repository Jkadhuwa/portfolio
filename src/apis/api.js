const {
  NODE_ENV,
  REACT_APP_BACKEND_URL_DEV,
  REACT_APP_BACKEND_URL_PROD,
} = process.env;
let backend_url = '';
if (NODE_ENV === 'development') {
  backend_url = REACT_APP_BACKEND_URL_DEV;
} else {
  backend_url = REACT_APP_BACKEND_URL_PROD;
}
export { backend_url };
