import { createBrowserRouter, RouterProvider } from "react-router";

export const router = createBrowserRouter([{}]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
