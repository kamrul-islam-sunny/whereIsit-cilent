import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AllItems = () => {
  const [data, setData] = useState([]);
  const loadedData = data;
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get(`https://lost-found-server-side.vercel.app/allItems`)
      .then((res) => setData(res.data));
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value === "") {
      setData(loadedData);
    }
    axios
      .get(`https://lost-found-server-side.vercel.app/search?query=${value}`)
      .then((res) => setData(res.data));
  };

  return (
    <div className="pb-4">
      <Helmet>
        <title>All lost and found item</title>
      </Helmet>
      <div className="flex justify-center py-10 mx-4">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="search "
          className="input input-bordered w-full max-w-md "
        />
      </div>
      {data.length > 0 ? (
        <div className="grid px-4 lg:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
            <div
              key={item._id}
              className="lg:max-w-sm md:max-w-xs bg-white border border-indigo-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="pt-5 h-72 w-80 mx-auto ">
                <img
                  className="rounded-t-lg h-full w-full object-cover"
                  src={item.thumbnail}
                  alt=""
                />
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
                <Link to={`/items/${item._id}`}>
                  <button
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Details
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-4xl font-bold text-center">no data</p>
      )}
    </div>
  );
};

export default AllItems;
