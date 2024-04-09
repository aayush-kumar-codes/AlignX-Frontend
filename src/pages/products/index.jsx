import RaaSDataPlatform from "./raasdataplatform";
import ReAlignAPIFramework from "./realignapiframework";


const Products = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <ReAlignAPIFramework />
      <RaaSDataPlatform />
    </>
  );
};

export default Products;
