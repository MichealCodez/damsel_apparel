function BottomCat(name, quantity, pStyles) {
  return (
    <div className="botton-cat">
      <p className="name" style={pStyles}>
        {name}
      </p>
      <p className="quantity" style={pStyles}>
        {quantity} products
      </p>
    </div>
  );
}

export default BottomCat;
