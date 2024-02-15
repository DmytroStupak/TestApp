import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages/home.page";
import ErrorPage from "./pages/error.page";
import { Callback as CallBackPage } from "./pages/callback.page";
import TestPage from "./pages/test.page";
import Test from "./pages/Test/test";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/callback",
        element: <CallBackPage />,
      },
      {
        path: "/test",
        element: <TestPage />,
      },
      {
        path: `/test/:id`,
        element: <Test />,
      },
    ],
  },
]);

export default appRoutes;
