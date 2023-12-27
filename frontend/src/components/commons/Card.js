import { useState } from "react";
import Ribbon from "./Ribbon";
import ProductImage from "./Image";
import BottomCat from "./BottomCat";

function Card({
  src,
  imgContClassName,
  ribbontext,
  productName,
  productQuantity,
}) {
  const [hovering, setHovering] = useState(false);
  function handleHovering() {
    setHovering(!hovering);
  }
  return (
    <div
      className="card"
      onMouseEnter={handleHovering}
      onMouseLeave={handleHovering}
    >
      <Ribbon text={ribbontext} />
      <ProductImage src={src} contClassName={imgContClassName} />
      <BottomCat
        name={productName}
        quantity={productQuantity}
        display={hovering && "flex"}
      />
    </div>
  );
}

export default Card;
