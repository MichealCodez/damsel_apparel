import Card from "./Card";
import { assets, imgs, displayCard } from "../../utils";
import "./hot_category.css";

function prop(data, j) {
  return data[j].hot_seller;
}

function HotCategory() {
  let cards = displayCard(imgs, 5, prop);
  return (
    <section className="hot-cat">
      <p className="vertical-text">EXPLORE NEW AND POPULAR STYLES</p>
      <div className="cards-cont">
        {cards.map((value) => (
          <Card
            src={`${assets}/images/${value.image}`}
            ribbontext={`${value.ribbon}`}
            productName={`${value.name}`}
            productQuantity={`${value.quantity}`}
            key={`${value.name}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HotCategory;
