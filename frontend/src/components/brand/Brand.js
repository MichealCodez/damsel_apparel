import { assets } from "../../utils";

function Brand() {
  const brands = [5, 1, 3, 2, 4];
  return (
    <div id="Brand-cont">
      {brands.map((value) => (
        <img
          src={`${assets}/brands/0${value}.png`}
          alt="Brand"
          className="brands"
          key={value}
        />
      ))}
    </div>
  );
}

export default Brand;
