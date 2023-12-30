import Ribbon from "../commons/Ribbon";
import MainBottomCat from "./MainBottomCat";
import ProductImage from "./Image";
import { assets } from "../../utils";
import { useState } from "react";
import "./common.css";

function BottomProduct({ productName, type = "Hair", price }) {
  return (
    <div className="bottom-product">
      <h6>{productName}</h6>
      <div className="price-type-cont">
        <p>{type}</p>
        <h6>{`N${price}`}</h6>
      </div>
    </div>
  );
}

function MainCard({ ribbon, image, likes, productName, type, price }) {
  const [hovering, setHovering] = useState(false);
  function handleHovering() {
    setHovering(!hovering);
  }
  return (
    <div
      className="main-card"
      onMouseEnter={handleHovering}
      onMouseLeave={handleHovering}
    >
      <Ribbon text={ribbon} />
      <ProductImage src={`${assets}/images/${image}`} />
      <MainBottomCat likes={likes} display={hovering && "flex"} />
      <BottomProduct productName={productName} type={type} price={price} />
    </div>
  );
}

export default MainCard;
