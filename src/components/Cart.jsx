import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [allItem, setAllItem] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4002/allItems")
      .then((res) => setAllItem(res.data));
  }, []);
  console.log(allItem);
  return (
    <div className="py-10">
      <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center py-12">
        Latest Find & Lost{" "}
      </h1>
      <div className="grid px-4 lg:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allItem.map((item) => (
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="pt-5 h-72 w-80 mx-auto ">
              <img
                class="rounded-t-lg h-full w-full object-cover"
                src={item.thumbnail}
                alt=""
              />
            </div>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {item.description}
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* <p>item</p> */}
    </div>
  );
};

export default Cart;
