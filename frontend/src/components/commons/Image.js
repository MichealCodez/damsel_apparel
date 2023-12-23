function ProductImage({ imgStyle, src }) {
  return (
    <div className="img-cont">
      <img src={src} alt="product" style={imgStyle} />
    </div>
  );
}

export default ProductImage;
