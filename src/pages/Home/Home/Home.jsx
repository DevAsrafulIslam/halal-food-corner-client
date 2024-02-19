import Banner from "../../Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <Category />
        <PopularMenu />
        <Featured />
      </div>
    </div>
  );
};

export default Home;
