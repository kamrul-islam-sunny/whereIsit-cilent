import React from "react";

const AllRecoveryCart = ({ userRecoveryItem }) => {
    console.log(userRecoveryItem, 'cart')
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {userRecoveryItem.map((item) => 
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Post Type: </span> {item.post_type}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">Status: </span>{item.status}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">recovered location: </span>{item.recovered_location}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-bold">recovered date: </span>{new Date(item.recoveryDate).toLocaleDateString("en-GB")}
          </p>
        </div>
      )}
    </div>
  );
};

export default AllRecoveryCart;
