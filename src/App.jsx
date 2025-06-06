import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

import ProductDetail from "./pages/ProductDetail";
import Category from "./pages/categories/Category";
import HugeSale from "./pages/categories/HugeSale";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import User from "./pages/user/User";
import UserLayout from "./layouts/UserLayout";
import UserInfo from "./pages/user/UserInfo";

import UserInfoChange from "./pages/user/UserInfoChange";
import AuthGuard from "./auth/authGuard";
import Checkout from "./pages/checkout/Checkout";
import Order from "./pages/Order";
import MobileSearch from "./pages/MobileSearch";
import Error from "./pages/errors/Error";
import NotFound from "./pages/errors/NotFound";
import ServerError from "./pages/errors/ServerError";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      {
        path: "products",
        children: [{ path: ":id", element: <ProductDetail /> }],
      },
      {
        path: "categories",
        children: [{ path: ":slug", element: <Category /> }],
      },
      { path: "sale/:saletips", element: <HugeSale /> },
      { path: "cart", element: <Cart /> },
      { path: "favorites", element: <Favorites /> },
      { path: "search", element: <Search /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "sign-in", element: <SignIn /> },

      {
        element: <AuthGuard />,
        children: [
          {
            path: "user",
            element: <UserLayout />,
            children: [
              { index: true, element: <UserInfo /> },
              { path: "user-info-change", element: <UserInfoChange /> },
            ],
          },
          { path: "checkout", element: <Checkout /> },
          { path: "order", element: <Order /> },
        ],
      },
      { path: "/mobileSearch", element: <MobileSearch /> },
      {
        path: "/errors",
        element: <Error />,
        children: [
          { path: "not-found", element: <NotFound /> },
          { path: "server-error", element: <ServerError /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
