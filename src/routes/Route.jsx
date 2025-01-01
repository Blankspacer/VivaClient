/* eslint-disable react-refresh/only-export-components */
import DashboardLayout from "@/layouts/DashboardLayout";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AdminRoute from "./AdminRoute";

const HomePage = lazy(() => import("../pages/mainPages/HomePage"));
const Login = lazy(() => import("../pages/mainPages/Login"));
const Register = lazy(() => import("../pages/mainPages/Register"));
const PaperSample = lazy(() =>
  import("../pages/mainPages/paperSample/PaperSample")
);
const CustomQuote = lazy(() =>
  import("../pages/mainPages/customQuote/CustomQuote")
);

const ResellerPage = lazy(() =>
  import("../pages/mainPages/resellersPage/ResellersPage")
);

const ContactUs = lazy(() => import("../pages/mainPages/contactUs/ContactUs"));

const About = lazy(() => import("../pages/mainPages/about/About"));

const BookletProduct = lazy(() =>
  import("../pages/mainPages/bookletProductPage/BookletProduct")
);

const ShoppingCart = lazy(() =>
  import("../pages/mainPages/productCart/ProductCart")
);

const ProductDetails = lazy(() =>
  import("../pages/mainPages/productDetails/ProductDetails")
);

const Loading = lazy(() => import("../components/ui/Loading"));

const AddProduct = lazy(() => import("../components/dashboard/AddProduct"));

const AddCategory = lazy(() => import("../components/dashboard/AddCategory"));

const AllCategory = lazy(() => import("../components/dashboard/AllCategory"));

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
        path: "/paper-sample",
        element: <PaperSample />,
      },
      {
        path: "/customer-quote",
        element: <CustomQuote />,
      },
      {
        path: "/resellers",
        element: <ResellerPage />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/:category",
        element: (
          <Suspense fallback={<Loading />}>
            <BookletProduct />
          </Suspense>
        ),
      },
      {
        path: "/cart/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ShoppingCart />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetails />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<Loading />}>
        <AdminRoute>
          <DashboardLayout />
        </AdminRoute>
      </Suspense>
    ),
    children: [
      {
        path: "add-product",
        element: (
          <AdminRoute>
            <AddProduct />
          </AdminRoute>
        ),
      },
      {
        path: "add-category",
        element: (
          <AdminRoute>
            <AddCategory />
          </AdminRoute>
        ),
      },
      {
        path: "all-category",
        element: (
          <AdminRoute>
            {" "}
            <AllCategory />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default routes;
