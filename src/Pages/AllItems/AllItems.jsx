import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllItems = () => {
  const [data, setData] = useState([]);
  const loadedData = data;
  const [query, setQuery] = useState('')
  useEffect(() => {
    axios
      .get(`http://localhost:4002/allItems`)
      .then((res) => setData(res.data));
  }, []);

  const handleSearch = (e) =>{
    const value = e.target.value
    setQuery(value)
    if(value === '')
    {
      setData(loadedData)
    }
    axios.get(`http://localhost:4002/search?query=${value}`)
    .then(res => setData(res.data))

  }


  return (
    <div className="">
       <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="কী খুঁজছেন?"
        className="input input-bordered w-full max-w-xs"
      />
      <div className="grid md:grid-cols-2 grid-cols-3">
        {data.map((item) => (
          <div className="">
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
              <figure>
                <img src={item.thumbnail} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <Link to={`/items/${item._id}`}>
                    <button className="btn btn-primary" type="button">
                      details
                    </button>
                  </Link>
                 
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllItems;
