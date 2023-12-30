function Button({ name, src = false, alt, className, message }) {
  const handleClick = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=2348148641117&text=${message}`,
      "_blank"
    );
  };
  return (
    <button className={className} onClick={handleClick}>
      {src && <img src={src} alt={alt} />}
      <p>{name}</p>
    </button>
  );
}

export default Button;
