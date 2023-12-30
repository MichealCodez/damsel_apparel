import Category from "../commons/Category";
import Button from "../commons/Button";

function TopSectionProducts({ buttonText, src = false, alt = false }) {
  return (
    <div className="top-section-products">
      <Category />
      <Button
        className={"top-section-products-btn content-btn"}
        name={buttonText}
        src={src}
        alt={alt}
      />
    </div>
  );
}

export default TopSectionProducts;
