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

{/* <div className="flex justify-center py-12">
<div
  class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
>
  <img
    class="object-cover  w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
    src={thumbnail}
    alt=""
  />
  <div class="flex flex-col justify-between p-4 leading-normal">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {title}
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
    {description}
    </p>
    <p class="flex items-center gap-2 mb-3 text-xl  font-medium text-gray-700 dark:text-gray-400">
    Post Type: <p className="text-base font-bold text-indigo-600">{post_type}</p> 
    </p>
    <div className="card-actions justify-end">
            {post_type === "Found" ? (
              <Link>
                <button onClick={handleModal} className="btn btn-primary">
                  This is Mine!
                </button>
              </Link>
            ) : (
              <Link>
                <button onClick={handleModal} className="btn btn-primary">
                  Found This!
                </button>
              </Link>
            )}
          </div>
  </div>
</div>
<Modal itemDate={itemDate} setDetailsDate={setDetailsDate}></Modal>
</div> */}