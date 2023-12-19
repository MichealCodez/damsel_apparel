function Button({ name, src = false, alt, iconStyle, btnStyle }) {
  return (
    <button style={btnStyle}>
      {src && <img src={src} alt={alt} style={iconStyle} />}
      {name}
    </button>
  );
}

export default Button;
