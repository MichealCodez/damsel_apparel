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
      <a
        href="https://api.whatsapp.com/send?phone=2348148641117&text=Hi+Casie!%2C+I+will+like+to+shop+some+hair."
        target="_blank"
        rel="noreferrer"
      >
        <Button
          name={"Shop Now"}
          src={`${assets}/icons/shopping_icon.svg`}
          className={"content-btn"}
        />
      </a>
    </div>
  );
}

export default Content;
