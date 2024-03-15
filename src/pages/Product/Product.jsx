import "./Product.css";

function Product() {
  return (
    <div id="parentdiv">
      <div id="about-section">
        <div id="about-head">About Corewelank</div>
        <div id="about-para">
          We are passionate about revolutinizing the way business operate. Our
          missions is to empower organizations of all sizes with cutting -edge{" "}
          SaaS solutions that adapt seamlessely to their unique neends
        </div>
        <div id="bgImage">
          <img
            id="maskimg1"
            className="group-img sm-hidden"
            src="images/mask4.png"
            alt="images"
          />
          <img
            id="maskimg2"
            className="group-img sm-hidden"
            src="images/mask1.png"
            alt="images"
          />
          <img id="maskimg3" className="group-img" src="images/Mask2.png" alt="images" />
          <img id="maskimg4" className="group-img" src="images/mask3.png" alt="images" />
        </div>
      </div>
    </div>
  );
}
export default Product;