import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Modal from "../../components/Modal";
import toast from "react-hot-toast";

const Details = () => {
  const itemDate = useLoaderData();
  const [detailsDate, setDetailsDate] = useState(itemDate);
  console.log(detailsDate);
  const { thumbnail, title, description, post_type } = detailsDate || {};
  const handleModal = () => {
    if (detailsDate?.status !== "recovered") {
      const modal = document.getElementById("my_modal_1");
      if (modal) modal.showModal();
    } else {
      toast.error("This item is already recovered");
    }
  };
  return (
    <div className="my-10">
      <div className="card bg-base-100 max-w-lg mx-auto shadow-xl border border-slate-200">
        <figure className="px-10 pt-10">
          <img src={thumbnail} alt="Shoes" className="rounded-xl " />
        </figure>
        <div className="card-body items-center text-center space-y-4">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>

          <div className="card-actions">
            {post_type === "Found" ? (
              <Link>
                <button
                  onClick={handleModal}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  This is Mine!
                </button>
              </Link>
            ) : (
              <Link>
                <button
                  onClick={handleModal}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Found This!
                </button>
              </Link>
            )}
          </div>
        </div>
        <Modal itemDate={itemDate} setDetailsDate={setDetailsDate}></Modal>
      </div>
    </div>
  );
};

export default Details;
