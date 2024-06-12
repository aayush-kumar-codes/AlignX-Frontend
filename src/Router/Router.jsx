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
import BlogContentDetails1 from "../pages/blog/detailsBlog/DetailBlog1";
import BlogContentDetails2 from "../pages/blog/detailsBlog/DetailBlog2";
import BlogContentDetails3 from "../pages/blog/detailsBlog/DetailBlog3";
import BlogContentDetails6 from "../pages/blog/detailsBlog/DetailBlog6";
import BlogContentDetails5 from "../pages/blog/detailsBlog/DetailBlog5";
import BlogContentDetails4 from "../pages/blog/detailsBlog/DetailBlog4";
import BlogContentDetails7 from "../pages/blog/detailsBlog/DetailBlog7";
import BlogContentDetails8 from "../pages/blog/detailsBlog/DetailBlog8";
import BlogContentDetails9 from "../pages/blog/detailsBlog/DetailBlog9";
import BlogContentDetails10 from "../pages/blog/detailsBlog/DetailBlog10";
import BlogContentDetails11 from "../pages/blog/detailsBlog/DetailBlog11";
import BlogContentDetails12 from "../pages/blog/detailsBlog/DetailBlog12";
import BlogContentDetails13 from "../pages/blog/detailsBlog/DetailBlog13";
import BlogContentDetails14 from "../pages/blog/detailsBlog/DetailBlog14";
import BlogContentDetails15 from "../pages/blog/detailsBlog/DetailBlog15";
import BlogContentDetails17 from "../pages/blog/detailsBlog/DetailBlog17";
import BlogContentDetails16 from "../pages/blog/detailsBlog/DetailBlog16";

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
      { path: "blog/leveragingRAGForPredictiveAnalyticsinDevOps", element: <BlogContentDetails1/> },
      { path: "blog/implementingRAGForAutomationInDevOps", element: <BlogContentDetails2/> },
      { path: "blog/benefitsAndFutureProspects1", element: <BlogContentDetails3/> },
      { path: "blog/leveragingRAGForTransportationCommandAndControlCenters", element: <BlogContentDetails4/> },
      { path: "blog/implementingRAGForTransportationCommandAndControlCenters", element: <BlogContentDetails5/> },
      { path: "blog/benefitsAndFutureProspects2", element: <BlogContentDetails6/> },
      { path: "blog/leveragingRAGForReconciliationActivities", element: <BlogContentDetails7/> },
      { path: "blog/implementingRAGForReconciliationActivities", element: <BlogContentDetails8/> },
      { path: "blog/benefitsAndFutureProspects3", element: <BlogContentDetails9/> },
      { path: "blog/financeAndBanking", element: <BlogContentDetails10/> },
      { path: "blog/healthcare", element: <BlogContentDetails11/> },
      { path: "blog/retailAndE-commerce", element: <BlogContentDetails12/> },
      { path: "blog/manufacturingAndLogistics", element: <BlogContentDetails13/> },
      { path: "blog/telecommunications", element: <BlogContentDetails14/> },
      { path: "blog/energyAndUtilities", element: <BlogContentDetails15/> },
      { path: "blog/thePowerOfRAGForEnterpriseSolutions", element: <BlogContentDetails16/> },
      { path: "blog/theAdvantagesOfTailor-MadeRAGSolutions", element: <BlogContentDetails17/> },
    ],
  },
]);