import React from "react";
import {Helmet} from "react-helmet";
import Slider from "../../components/Slider";
import Cart from "../../components/Cart";
import Category from "../../components/Category";
import SuccessStory from "../../components/SuccessStory";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <Slider></Slider>
      <Cart></Cart>
      <Category></Category>
      <SuccessStory></SuccessStory>
    </div>
  );
};

export default HomePage;

