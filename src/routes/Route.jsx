import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const HomePage = lazy(() => import("../pages/mainPages/HomePage"));
const Login = lazy(() => import("../pages/mainPages/Login"));
const Register = lazy(() => import("../pages/mainPages/Register"));

const Loading = () => <div>Loading...</div>;

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: "Error",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;
