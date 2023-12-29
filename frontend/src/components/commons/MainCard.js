import Ribbon from "../commons/Ribbon";
import MainBottomCat from "./MainBottomCat";

function BottomProduct(productName, type = "Hair", price) {
  return (
    <div className="bottom-product">
      <h6>{productName}</h6>
      <div className="price-type-cont">
        <p>{type}</p>
        <h6>{price}</h6>
      </div>
    </div>
  );
}

function MainCard() {
  return (
    <div className="main-card">
      <Ribbon text={ribbonText} />
      <MainBottomCat likes={likes} />
      <BottomProduct productName={productName} type={type} price={price} />
    </div>
  );
}

export default MainCard;
