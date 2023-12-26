import Header from "./header/Header";
import Product from "./product/Product";
import { assets } from "../../utils";
import "./topmain.css";

function MiniTopMain() {
  return (
    <div className="mini-top-main">
      <Header />
      <Product />
    </div>
  );
}

function TopMain() {
  return (
    <div className="top-main">
      <img
        id="left-flower"
        src={`${assets}/commons/Frame-2.png`}
        alt="Flower"
      />
      <img id="right-flower" src={`${assets}/commons/Frame.png`} alt="Flower" />
      <MiniTopMain />
    </div>
  );
}

export default TopMain;
