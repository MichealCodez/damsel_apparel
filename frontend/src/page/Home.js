import TopMain from "../components/top_main/TopMain";
import Brand from "../components/brand/Brand";
import HotCategory from "../components/hot_category/HotCategory";
import GridProducts from "../components/grid_products/GridProducts";

function Home() {
  return (
    <div id="home">
      <TopMain />
      <Brand />
      <HotCategory />
      <GridProducts />
    </div>
  );
}

export default Home;
