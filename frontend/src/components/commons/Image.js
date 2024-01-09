import "./common.css";

function ProductImage({ src }) {
  return (
    <div className="card-img-cont">
      <img src={src} alt="product" width="300" hight="300" />
    </div>
  );
}

export default ProductImage;
