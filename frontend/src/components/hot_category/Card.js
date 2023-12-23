import Ribbon from "../commons/Ribbon";
import ProductImage from "../commons/Image";
import BottomCat from "../commons/BottomCat";

function Card({
  src,
  productImgStyle,
  ribbontext,
  productName,
  productQuantity,
  bottomDetailsStyle,
}) {
  return (
    <div className="card">
      <Ribbon text={ribbontext} />
      <ProductImage src={src} imgStyle={productImgStyle} />
      <BottomCat
        name={productName}
        quantity={productQuantity}
        pStyles={bottomDetailsStyle}
      />
    </div>
  );
}

export default Card;
