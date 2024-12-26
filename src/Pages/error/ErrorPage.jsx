import React from "react";
import Lottie from "lottie-react";
import NoPage from "../../assets/animation/notPage.json";

const ErrorPage = () => {
  return (
    <div>
      <div className="text-center max-w-2xl mx-auto">
        <Lottie animationData={NoPage}></Lottie>
      </div>
      <h1 className="text-center text-2xl py-10">Not Found Page.</h1>
    </div>
  );
};

export default ErrorPage;
