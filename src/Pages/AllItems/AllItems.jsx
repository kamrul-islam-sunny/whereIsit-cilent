import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllItems = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4002/allItems`)
      .then((res) => setData(res.data));
  }, []);
  console.log(data);

  return (
    <div className="grid md:grid-cols-2 grid-cols-3">
      {data.map((item) => (
        <div className="">
          <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img  src={item.thumbnail} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <Link to={`/items/${item._id}`}><button className="btn btn-primary" type="button">details</button></Link>
                <Link to={`/updateItems/${item._id}`}><button className="btn btn-info" type="button">Update</button></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllItems;
