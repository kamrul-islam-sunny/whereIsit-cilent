import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Lottie from "lottie-react";
import NoData from "../../assets/animation/noData.json";
import toast from "react-hot-toast";

const MyItem = () => {
  const [postItem, setPostItem] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    axios
      .get(`http://localhost:4002/userItems?email=${user.email}`)
      .then((res) => setPostItem(res.data));
  }, []);
  console.log(postItem);
  const removeItem = (id) => {
    axios.delete(`http://localhost:4002/item/${id}`).then((res) => {
      console.log(res.data);
      toast.success("successfully delete.");
    });
  };

  const toastModi = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <div>
          <p>
            Are you <b>sure?</b>
          </p>
        </div>
        <div className="gap-2 flex">
          <button
            className="bg-red-400 text-white px-3 py-1 rounded-md"
            onClick={() => {
              toast.dismiss(t.id);
              removeItem(id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-400 text-white px-3 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  const handleUpdate = (id) => {};
  if (postItem.length === 0) {
    return (
      <div className="text-center max-w-2xl">
        <Lottie animationData={NoData}></Lottie>
      </div>
    );
  }
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">
        My Items
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-300 w-full text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-sm font-semibold">
            <tr>
              <th className="border border-gray-300 px-6 py-3">Title</th>
              <th className="border border-gray-300 px-6 py-3">Post Type</th>
              <th className="border border-gray-300 px-6 py-3">Location</th>
              <th className="border border-gray-300 px-6 py-3">Date</th>
              <th className="border border-gray-300 px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {postItem.map((item) => (
              <tr
                key={item._id}
                className="hover:bg-blue-100 even:bg-gray-50 odd:bg-white"
              >
                <td className="border border-gray-300 px-6 py-3">
                  {item.title}
                </td>
                <td className="border border-gray-300 px-6 py-3">
                  {item.post_type}
                </td>
                <td className="border border-gray-300 px-6 py-3">
                  {item.location}
                </td>
                <td className="border border-gray-300 px-6 py-3">
                  {item.Date}
                </td>
                <td className="border border-gray-300 px-6 py-3 flex gap-4">
                  <button
                    onClick={() => handleUpdate(item._id)}
                    className="btn btn-primary"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => toastModi(item._id)}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItem;
