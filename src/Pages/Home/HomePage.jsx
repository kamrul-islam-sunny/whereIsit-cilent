import React from "react";
import {Helmet} from "react-helmet";
import Slider from "../../components/Slider";
import Cart from "../../components/Cart";
import Category from "../../components/Category";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <Slider></Slider>
      <Cart></Cart>
      <Category></Category>
    </div>
  );
};

export default HomePage;

