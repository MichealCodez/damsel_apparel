import "./common.css";

function Ribbon({ text }) {
  let backgroundStyle = { backgroundColor: "#ff6f61" };
  let ribbon = true && text;
  if ((ribbon && text.toUpperCase()) !== "HOT") {
    backgroundStyle = { backgroundColor: "#1E2832" };
  }
  return (
    ribbon && (
      <div className="ribbon" style={backgroundStyle}>
        {text}
      </div>
    )
  );
}

export default Ribbon;
