import "./common.css";

function Ribbon({ text }) {
  let backgroundStyle = { backgroundColor: "#ff6f61" };
  if (text.toUpperCase() !== "HOT") {
    backgroundStyle = { backgroundColor: "#1E2832" };
  }
  return (
    <div className="ribbon" style={backgroundStyle}>
      {text}
    </div>
  );
}

export default Ribbon;
