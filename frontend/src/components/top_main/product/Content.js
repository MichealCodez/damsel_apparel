import Button from "../../commons/Button";
import { assets } from "../../../utils";

function Content() {
  return (
    <div className="content-div">
      <h1>Collections</h1>
      <div>
        <p>You Can Explore And Shop Different Collections</p>
        <p>From Various Hairs Here.</p>
      </div>
      <Button
        name={"Shop Now"}
        src={`${assets}/icons/shopping_icon.svg`}
        className={"content-btn"}
      />
    </div>
  );
}

export default Content;
