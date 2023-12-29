import Category from "../commons/Category";
import Button from "../commons/Button";
import { assets } from "../../utils";

function TopSectionProducts() {
  return (
    <div className="top-section-products">
      <Category />
      <Button
        className={"top-section-products-btn content-btn"}
        name="Filter"
        src={`${assets}/icons/filter.svg`}
        alt="Filter Icon"
      />
    </div>
  );
}

export default TopSectionProducts;
