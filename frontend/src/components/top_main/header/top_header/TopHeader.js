import Search from "./Search";
import Button from "../../../Button";
import { assets } from "../../../../utils";

function TopHeader() {
  return (
    <div id="top-header">
      <Search />
      <img id="logo" src={`${assets}/brands/logo.png`} alt="Logo" />
      <Button
        name="Account"
        src={`${assets}/icons/account_icon.png`}
        alt="Account Icon"
      />
      <Button
        name="Shopping"
        src={`${assets}/icons/shopping_icon.png`}
        alt="Shopping Icon"
      />
    </div>
  );
}

export default TopHeader;
