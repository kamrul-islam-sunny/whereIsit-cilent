import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const detailsDate = useLoaderData();
  console.log(detailsDate);
  const {thumbnail, title} = detailsDate;
  return (
    <div>
          <div className="">
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
              <figure>
                <img src={thumbnail} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  {/* <button
                    onClick={() => removeItem(item._id)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button> */}
                  {/* <button className="btn btn-primary" type="button">
                    <Link to={`/items/${item._id}`}>details</Link>
                  </button> */}
                </div>
              </div>
            </div>
      </div>
    </div>
  );
};

export default Details;
