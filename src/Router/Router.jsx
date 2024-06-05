import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/HomePage/Home";
import App from "../App";
import Solutions from "../pages/solutions";
import Resources from "../pages/resources";
import About from "../pages/about";
import Products from "../pages/products";
import AiCenter from "../pages/solutions/aicenter";
import AlignmentAssesment from "../pages/solutions/alignmentassesment";
import CustomEvalution from "../pages/solutions/customevalution";
import CustomRag from "../pages/solutions/customreg";
import RaaSDataPlatform from "../pages/products/raasdataplatform";
import ReAlignAPIFramework from "../pages/products/realignapiframework";
import Blog from "../pages/blog";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "products", element: <Products /> },
      {path:"reAlignAPIFramework",element:<ReAlignAPIFramework/>},
      {path:"RaaSDataPlatform",element:<RaaSDataPlatform/>},
      { path: "solutions", element: <Solutions /> },
      { path: "solutions/customRag", element: <CustomRag/> },
      { path: "solutions/customEvalution", element: <CustomEvalution/> },
      { path: "solutions/alignmentAssesment", element: <AlignmentAssesment/> },
      { path: "solutions/aiCenter", element: <AiCenter/> },
      { path: "resources", element: <Resources /> },
      { path: "aboutUS", element: <About/> },
      { path: "blog", element: <Blog/> },
    ],
  },
]);