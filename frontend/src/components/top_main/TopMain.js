import Header from "./header/Header";
import Product from "./product/Product";
import { assets } from "../../utils";

function MiniTopMain() {
  return (
    <div id="mini-top-main">
      <Header />
      <Product />
    </div>
  );
}

function TopMain() {
  return (
    <div id="top-main">
      <img
        id="left-flower"
        src={`${assets}/commons/Frame-2.png`}
        alt="Flower"
      />
      <MiniTopMain />
      <img id="right-flower" src={`${assets}/commons/Frame.png`} alt="Flower" />
    </div>
  );
}

export default TopMain;
