function BottomCat({ name, quantity, display }) {
  return (
    <div className="bottom-cat" style={{ display: display }}>
      <h6 className="name">{name}</h6>
      <h6 className="quantity">{quantity} products</h6>
    </div>
  );
}

export default BottomCat;
