import TopHeader from "./top_header/TopHeader";
import Menu from "./Menu";
import Line from "./Line";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <TopHeader />
      <Line />
      <Menu />
    </div>
  );
}

export default Header;
