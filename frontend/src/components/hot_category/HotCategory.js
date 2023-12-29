import Card from "./Card";
import { assets } from "../../utils";
import "./hot_category.css";

function HotCategory() {
  const imgs = [
    {
      name: "Manto",
      quantity: 86,
      ribbonText: "HOT",
      src: "6.JPG",
    },
    {
      name: "Pants",
      quantity: 200,
      ribbonText: "HOT",
      src: "7.JPG",
    },
    {
      name: "Coat",
      quantity: 520,
      ribbonText: "SALE",
      src: "8.JPG",
    },
    {
      name: "Shirt",
      quantity: 320,
      ribbonText: "HOT",
      src: "9.JPG",
    },
    {
      name: "Jacket",
      quantity: 103,
      ribbonText: null,
      src: "10.JPG",
    },
  ];
  return (
    <div className="hot-cat">
      <p className="vertical-text">EXPLORE NEW AND POPULAR STYLES</p>
      <div className="cards-cont">
        {imgs.map((value) => (
          <Card
            src={`${assets}/images/${value.src}`}
            ribbontext={`${value.ribbonText}`}
            productName={`${value.name}`}
            productQuantity={`${value.quantity}`}
            key={`${value.name}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HotCategory;
