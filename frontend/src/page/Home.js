import TopMain from "../components/top_main/TopMain";
import Brand from "../components/brand/Brand";
import HotCategory from "../components/hot_category/HotCategory";
import GridProducts from "../components/grid_products/GridProducts";
import BrandBanner from "../components/brand_banner/BrandBanner";
import SliderProducts from "../components/slider_products/SliderProducts";
import NewsletterInstagram from "../components/newsletter_instagram/NewsletterInstagram";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
      <TopMain />
      <Brand />
      <HotCategory />
      <GridProducts />
      <BrandBanner />
      <SliderProducts />
      <NewsletterInstagram />
      <Footer />
    </>
  );
}

export default Home;
