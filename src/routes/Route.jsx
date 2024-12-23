/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

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
        path: "/cart",
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
]);

export default routes;
