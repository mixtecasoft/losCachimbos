import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
// components
import NotFound from "./pages/Page404";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/_app/products/ProductDetails";

// ----------------------------------------------------------------------

const Router = () => {
   return useRoutes([
      {
         path: "/app",
         element: <DashboardLayout />,
         children: [
            // { element: <Navigate to="/app/dashboard" replace /> },
            { path: "dashboard", element: <ProductListing /> },
            { path: "orders", element: <Products /> },
            { path: "clients", element: <Products /> },
            {
               path: "products",
               element: <Products />,
            },
            {
               path: "products/:productId",
               element: <ProductDetails />,
            },

            { path: "blog", element: <Products /> },
         ],
      },
      {
         path: "/",
         element: <LogoOnlyLayout />,
         children: [
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "404", element: <NotFound /> },
            { path: "/", element: <Navigate to="/app/dashboard" /> },
            { path: "*", element: <Navigate to="/404" /> },
         ],
      },
      { path: "*", element: <Navigate to="/404" replace /> },
   ]);
};

export default Router;

// <Router>
//          <Header />
//          <Routes>
//             <Route path="/" element={<DashboardLayout />} />
//             <Route path="/products/" element={<ProductListing />} />
//             <Route path="/products/:productId" element={<ProductDetails />} />
//             <Route>404 Not found.</Route>
//          </Routes>
//       </Router>
