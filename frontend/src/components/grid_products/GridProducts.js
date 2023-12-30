import TopSectionProducts from "./TopSectionProducts";
import MainCard from "../commons/MainCard";
import { displayCard, imgs, assets } from "../../utils";
// import { Link } from "react-router-dom";
import "./grid_product.css";

function prop(data, j) {
  if (!(data[j].best_seller || data[j].hot_seller)) {
    return true;
  }
  return false;
}

function GridProducts() {
  let cards = displayCard(imgs, 8, prop);
  return (
    <section className="grid-product">
      <a href="#newsletter-instagram-section">
        <h2 className="section-header">Or subscribe to the newsletter</h2>
      </a>
      <TopSectionProducts
        alt={"Filter Icon"}
        src={`${assets}/icons/filter.svg`}
        buttonText={"Filter"}
      />
      <div className="grid-cards-cont cards-cont">
        {cards.map((value, index) => (
          <MainCard
            ribbon={value.ribbon}
            image={value.image}
            likes={value.likes}
            productName={value.name}
            type={value.type}
            price={value.price}
            video={value.video}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

export default GridProducts;
