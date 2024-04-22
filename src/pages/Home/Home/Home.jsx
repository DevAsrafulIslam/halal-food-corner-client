import Banner from "../../Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import ChefCart from "../ChefCart/ChefCart";
import BistroBoss from "../BistroBoss/BistroBoss";
import Contact from "../Contact/Contact";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <div className="container mx-auto">
        <Category />
        <BistroBoss />
        <PopularMenu />
        <Contact />
        <ChefCart />
        <Featured />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
