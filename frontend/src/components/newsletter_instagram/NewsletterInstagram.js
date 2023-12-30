import InstagramCard from "./InstagramCard";
import "./newsletter_instagram.css";
import { displayCard, imgs, assets } from "../../utils";

function NewsletterInstagram() {
  const cards = displayCard(imgs, 6);
  return (
    <section
      className="newsletter-instagram-section"
      id="newsletter-instagram-section"
    >
      <div className="instagram-cont">
        <h2 className="section-header">
          Follow products and discounts on Instagram
        </h2>
        <div className="instagrams">
          {cards.map((value, index) => (
            <a href={value.video} target="_blank" rel="noreferrer">
              <InstagramCard
                src={`${assets}/images/${value.image}`}
                key={index}
              />
            </a>
          ))}
        </div>
        <h2 className="section-header">Or subscribe to the newsletter</h2>
        <form method="POST">
          <input
            type="email"
            className="email"
            name="email"
            placeholder="Email Address..."
          />
          <button type="submit" className="submit-btn">
            submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterInstagram;
