function Button({ name, src = false, alt, className }) {
  return (
    <button className={className}>
      {src && <img src={src} alt={alt} />}
      <p>{name}</p>
    </button>
  );
}

export default Button;
