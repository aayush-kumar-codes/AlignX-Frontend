// import Client from "../../components/client";
// import ParticlesBackground from "../../components/particlesBackground";
// import Testimonials from "./Testimonials/Testimonials";
// import TestimonialsSlick from "./Testimon/ials/TestimonialsSlick";
// import Conversion from "./conversion";
// import DownloadsProducts from "./downloadApp/downloadapp";
import FeatureOne from "./featureOne/FeatureOne";
import HeroBanner from "./heroBanner/HeroBanner";
// import NewsAndBlogs from "./newsAndBlogs";
// import NoOfConversion from "./numberOfConversion";

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
      {/* <CtaTwo /> */}
      {/* <TestimonialsSlick /> */}
      {/* <Conversion /> */}
      {/* <NewsAndBlogs /> */}
      {/* <Testimonials /> */}

      {/* <Client subHeading={"Trusted by Industries leaders and Top Startup."} /> */}
      {/* <DownloadsProducts /> */}
    </>
  );
};
