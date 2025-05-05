import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com/";

const methods = {
  get: (url) => axios.get(url).then((response) => response.data),
};

const categories = {
  list: () => methods.get("products/categories"),
};

const requests = {
  categories,
};

export default requests;
