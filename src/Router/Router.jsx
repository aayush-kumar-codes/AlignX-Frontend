import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/HomePage/Home";
import App from "../App";
import Solutions from "../pages/solutions";
import Resources from "../pages/resources";
import About from "../pages/about";
import Products from "../pages/products";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "solutions", element: <Solutions /> },
      { path: "resources", element: <Resources /> },
      { path: "aboutUS", element: <About/> },
    ],
  },
]);