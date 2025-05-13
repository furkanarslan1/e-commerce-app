import axios from "axios";
import { router } from "../App";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://dummyjson.com/";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;

      switch (status) {
        case 401: {
          toast.error("Unauthorized!");
          router.navigate("/sign-in");
          break;
        }
        case 404: {
          toast.error("Not Found!");
          router.navigate("/errors/not-found");
          break;
        }
        case 500: {
          toast.error("Server Error!");
          router.navigate("/errors/server-error");
          break;
        }
        default: {
          toast.error("An unexpected error occurred");
          break;
        }
      }
    } else if (error.request) {
      toast.error("Cannot reach the server. Check your internet connection.");
    } else {
      toast.error("Request could not be made");
    }
    return Promise.reject(error);
  }
);

const methods = {
  get: (url) => axios.get(url).then((response) => response.data),
};

const search = {
  search: (item) => methods.get(`products/search?q=${item}`),
};

const products = {
  item: (id) => methods.get(`products/${id}`),
  list: () => methods.get("products"),
};

const category = {
  list: (slug) => methods.get(`products/category/${slug}`),
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
  category,
  search,
};

export default requests;
