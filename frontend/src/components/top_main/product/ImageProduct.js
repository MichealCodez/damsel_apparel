import { assets } from "../../../utils";

function ImageProduct() {
  return (
    <div className="image-product">
      <img id="photo" src={`${assets}/commons/19.png`} alt="Human" />
      <img id="frame" src={`${assets}/commons/Rectangle.png`} alt="Rectangle" />
    </div>
  );
}

export default ImageProduct;
