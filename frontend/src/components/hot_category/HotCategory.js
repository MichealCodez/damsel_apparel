import Card from "../commons/Card";
import { assets } from "../../utils";
import "./hot_category.css";

function HotCategory() {
  const imgs = [
    {
      name: "Manto",
      quantity: 86,
      ribbonText: "HOT",
      src: "21.png",
    },
    {
      name: "Pants",
      quantity: 200,
      ribbonText: "HOT",
      src: "01.png",
    },
    {
      name: "Coat",
      quantity: 520,
      ribbonText: "SALE",
      src: "03.png",
    },
    {
      name: "Shirt",
      quantity: 320,
      ribbonText: "HOT",
      src: "02.png",
    },
    {
      name: "Jacket",
      quantity: 103,
      ribbonText: "HOT",
      src: "20.png",
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
