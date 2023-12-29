import { assets } from "../../../utils";

function ImageProduct() {
  return (
    <div className="image-product">
      <img id="photo" src={`${assets}/images/hero_photo.JPG`} alt="Human" />
      <img id="frame" src={`${assets}/commons/Rectangle.png`} alt="Rectangle" />
    </div>
  );
}

export default ImageProduct;
