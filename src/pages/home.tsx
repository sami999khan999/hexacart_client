import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandeler = () => {};
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to={"/search"} className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="i4g5ihrwkevis"
          name="Gaming PC"
          price={1299}
          stock={28}
          handeler={addToCartHandeler}
          photo="https://m.media-amazon.com/images/I/81CFOwoLVlL._AC_SX466_.jpg?fbclid=IwAR2sbMsdh8rBAKomsURo-cFNsw4_Y9g8wU3bI0u4la25KdpvNc4cLYr4L1Y"
        />
      </main>
    </div>
  );
};

export default Home;
