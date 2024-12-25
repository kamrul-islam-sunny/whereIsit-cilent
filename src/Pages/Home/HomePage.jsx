import React from "react";
import {Helmet} from "react-helmet";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <h1 className="text-4xl text-center"> home page</h1>
    </div>
  );
};

export default HomePage;
