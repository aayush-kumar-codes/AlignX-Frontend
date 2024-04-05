import Client from "../../components/client";
import Testimonials from "./Testimonials/Testimonials";
import TestimonialsSlick from "./Testimonials/TestimonialsSlick";
import Conversion from "./conversion";
import CtaTwo from "./ctaTwo";
import DownloadsProducts from "./downloadApp/downloadapp";
import FeatureOne from "./featureOne/FeatureOne";
import HeroBanner from "./heroBanner/HeroBanner";
import NewsAndBlogs from "./newsAndBlogs";
import NoOfConversion from "./numberOfConversion";

export const Home = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
      <HeroBanner />
      {/* <Client /> */}
      {/* <NoOfConversion /> */}
      <FeatureOne />
      <CtaTwo />
      {/* <TestimonialsSlick /> */}
      {/* <Conversion /> */}
      <NewsAndBlogs />
      {/* <Testimonials /> */}

      {/* <Client subHeading={"Trusted by Industries leaders and Top Startup."} /> */}
      {/* <DownloadsProducts /> */}
    </>
  );
};
