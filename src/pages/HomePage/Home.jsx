import Testimonials from "./Testimonials/Testimonials";
import Conversion from "./conversion";
import CtaTwo from "./ctaTwo";
import FeatureOne from "./featureOne/FeatureOne";
import HeroBanner from "./heroBanner/HeroBanner";
import NewsAndBlogs from "./newsAndBlogs";
import NoOfConversion from "./numberOfConversion";

export const Home = () => {
  return (
    <>
      <HeroBanner />
      <NoOfConversion />
      <FeatureOne />
      <CtaTwo />
      <Conversion />
      <NewsAndBlogs />
      <Testimonials />
    </>
  );
};
