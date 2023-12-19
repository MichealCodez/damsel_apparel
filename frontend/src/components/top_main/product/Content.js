import Button from "../../Button";
import { assets } from "../../../utils";

function Content() {
  return (
    <div id="content-div">
      <h1>Collections</h1>
      <p>
        You Can Explore And Shop Different Collections From Various Brands Here.
      </p>
      <Button name={"Shop Now"} src={`${assets}/icons/shopping_icon.png`} />
    </div>
  );
}

export default Content;
