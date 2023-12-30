import { assets } from "../../utils";
import "./brand.css";

function Brand() {
  const brands = [5, 1, 3, 2, 4];
  return (
    <section className="brand-cont">
      {brands.map((value) => (
        <img
          src={`${assets}/brands/0${value}.png`}
          alt="Brand"
          className="brands"
          key={value}
        />
      ))}
    </section>
  );
}

export default Brand;
