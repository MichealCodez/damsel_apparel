import TopSectionProducts from "../grid_products/TopSectionProducts";
import MainCard from "../commons/MainCard";
import { displayCard, imgs } from "../../utils";
import "./slider_products.css";

function prop(data, j) {
  return data[j].best_seller;
}

function SliderProducts() {
  let cards = displayCard(imgs, 4, prop);
  return (
    <section className="slider-products">
      <h2 className="section-header">Best Seller</h2>
      <TopSectionProducts buttonText={"Show All"} />
      <div className="grid-cards-cont">
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

export default SliderProducts;
