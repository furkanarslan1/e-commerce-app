import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com/";

const methods = {
  get: (url) => axios.get(url).then((response) => response.data),
};

const products = {
  item: (id) => methods.get(`products/${id}`),
  list: () => methods.get("products"),
};

const categories = {
  list: () => methods.get("products/categories"),
  menshirt: () => methods.get("products/category/mens-shirts"),
  furniture: () => methods.get("products/category/furniture"),
  sunglasses: () => methods.get("products/category/sunglasses"),
  mobile_accessories: () => methods.get("products/category/mobile-accessories"),
  womens_dresses: () => methods.get("products/category/womens-dresses"),
  womens_shoes: () => methods.get("products/category/womens-shoes"),
  tops: () => methods.get("products/category/tops"),
  smartphones: () => methods.get("products/category/smartphones"),
};

const requests = {
  categories,
  products,
};

export default requests;
