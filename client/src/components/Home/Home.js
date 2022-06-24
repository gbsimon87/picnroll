import React from "react";
import Slider from "../Slider/Slider";
import Banner from "../Banner/Banner";
import Divider from "../Divider/Divider";
import Deals from "../Deals/Deals";
import Categories from "../Categories/Categories";
import { data } from "../../data/data";

const Home = () => {
  const {
    main: { deals, categories, slider },
  } = data;
  const categoriesTopData = categories.slice(0, 6);
  const categoriesBottomData =
    categories && categories.slice(Math.max(categories.length - 5, 1));

  return (
    <div className="page-home">
      <Banner text="Free same day delivery" />
      <Slider name="promo-shoes" size="lg" data={slider} />
      <Deals data={deals} />
      <Categories data={categoriesTopData} />
      <Divider />
      <Categories data={categoriesBottomData} />
    </div>
  );
};

export default Home;
