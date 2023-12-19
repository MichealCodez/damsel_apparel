import { assets } from "../../../utils";

function ImageProduct() {
  return (
    <div id="image-product">
      <img src={`${assets}/commons/19.png`} alt="Human" />
      <img src={`${assets}/commons/Rectangle.png`} alt="Rectangle" />
    </div>
  );
}

export default ImageProduct;
