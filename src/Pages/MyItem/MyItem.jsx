import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Lottie from "lottie-react";
import NoData from "../../assets/animation/noData.json";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";

const MyItem = () => {
  const [postItem, setPostItem] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxios()
  useEffect(() => {
    // axios
    //   .get(`http://localhost:4002/userItems?email=${user.email}`, {
    //     withCredentials: true,
    //   })
    //   .then((res) => setPostItem(res.data));
    axiosSecure.get(`/userItems?email=${user.email}`)
    .then((res) => setPostItem(res.data))

  }, []);
  
  const removeItem = (id) => {
    axios.delete(`http://localhost:4002/item/${id}`).then((res) => {
      console.log(res.data);
      const remainingData =  postItem.filter(item => item._id !== id);
      setPostItem(remainingData)
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

  const handleUpdate = (id) => {


  };
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
      <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
        <Table >
          <Thead className="bg-gray-100">
            <Tr>
              <Th className="text-left px-4 py-2 text-sm font-semibold text-gray-700" >Title</Th>
              <Th className="text-left px-4 py-2 text-sm font-semibold text-gray-700" >Post Type</Th>
              <Th className="text-left px-4 py-2 text-sm font-semibold text-gray-700" >Location</Th>
              <Th className="text-left px-4 py-2 text-sm font-semibold text-gray-700" >Date</Th>
              <Th className="text-left px-4 py-2 text-sm font-semibold text-gray-700" >Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {postItem.map((item) => (
              <Tr
                key={item._id}
                className="hover:bg-gray-50 mb-2 rounded-lg  lg:rounded-none"
              >
                <Td className="px-4 py-2 text-base text-gray-800 ">
                  {item.title}
                </Td>
                <Td className="px-4 py-2 text-base text-gray-800 ">
                  {item.post_type}
                </Td>
                <Td className="px-4 py-2 text-base text-gray-800 ">
                  {item.location}
                </Td>
                <Td className="px-4 py-2 text-base text-gray-800 ">
                {new Date(item.Date).toLocaleDateString('en-GB')}
                </Td>
                <Td className="px-4 py-2 text-base text-gray-800 ">
                 <Link to={`/updateItems/${item._id}`}>
                    <button className="btn text-white bg-indigo-600 hover:bg-indigo-700" type="button">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => toastModi(item._id)}
                    className="btn text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Delete
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyItem;
