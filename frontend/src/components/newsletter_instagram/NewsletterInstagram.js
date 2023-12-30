import "./newsletter_instagram.css";

function NewsletterInstagram() {
  return (
    <section className="newsletter-instagram-section">
      <h2 className="section-header">
        Follow products and discounts on Instagram
      </h2>
      <div className="instagrams"></div>
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
    </section>
  );
}

export default NewsletterInstagram;
