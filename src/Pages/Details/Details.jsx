import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Modal from "../../components/Modal";
import toast from "react-hot-toast";

const Details = () => {
  const detailsDate = useLoaderData();
  console.log(detailsDate);
  const { thumbnail, title, description, post_type, _id } = detailsDate;
  const handleModal = () => {
    if (detailsDate?.status !== "recovered") {
      const modal = document.getElementById("my_modal_1");
      if (modal) modal.showModal();
    }
    else{
        toast.error('This item is already recovered')
    }
  };
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={thumbnail} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          {/* detailsDate?.status */}
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
          <Modal id={_id}></Modal>
        </div>
      </div>
    </div>
  );
};

export default Details;
