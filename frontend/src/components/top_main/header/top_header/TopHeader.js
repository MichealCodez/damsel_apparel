import Search from "./Search";
import Button from "../../../commons/Button";
import { assets } from "../../../../utils";
import "./topheader.css";

function TopHeader() {
  return (
    <div className="top-header">
      <Search />
      <img className="logo" src={`${assets}/brands/logo.svg`} alt="Logo" />
      <div className="btn-right">
        <Button
          className={"account-btn abtn"}
          name="Account"
          src={`${assets}/icons/account_icon.svg`}
          alt="Account Icon"
        />
        <Button
          className={"shopping-btn abtn"}
          name="Shopping"
          src={`${assets}/icons/shopping_icon.svg`}
          alt="Shopping Icon"
        />
      </div>
    </div>
  );
}

export default TopHeader;
