import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

import ProductDetail from "./pages/ProductDetail";
import Category from "./pages/categories/Category";
import HugeSale from "./pages/categories/HugeSale";

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
