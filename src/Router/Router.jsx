import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/HomePage/Home";
import Product from "../pages/Product/Product";
import Pricing from "../pages/Pricing/Pricing";
import Company from "../pages/Company/Company";
import Contact from "../pages/Contact/Contact";
import Resource from "../pages/Resource/Resource";
import App from "../App";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "product", element: <Product /> },
      { path: "pricing", element: <Pricing /> },
      { path: "company", element: <Company /> },
      { path: "resource", element: <Resource /> },
      { path: "contact", element: <Contact /> },
      {path : "contact/okay", element : <div> okay page</div>}
    ],
  },
]);