import "./common.css";

function ProductImage({ src }) {
  return (
    <div className="card-img-cont">
      <img src={src} alt="product" />
    </div>
  );
}

export default ProductImage;
