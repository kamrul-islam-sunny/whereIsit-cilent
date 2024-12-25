import React from "react";
import {Helmet} from "react-helmet";
import Slider from "../../components/Slider";
import Cart from "../../components/Cart";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <Slider></Slider>
      <Cart></Cart>
    </div>
  );
};

export default HomePage;
