import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Lottie from "lottie-react";
import NoData from "../../assets/animation/noData.json";

const AllRecoveredItem = () => {
  const [recoveryItem, setRecoveryItem] = useState([]);
  const [userRecovered, setUserRecovered] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    axios
      .get(`http://localhost:4002/recoveredDate`)
      .then((res) => setRecoveryItem(res.data));
  }, []);


  useEffect(() => {
    if (user && recoveryItem.length > 0) {
      const recoveredItems = recoveryItem.filter(
        (item) => item.userEmail === user.email
      );
      setUserRecovered(recoveredItems);
      console.log("user recovery", userRecovered)
    } else {
      <div className="text-center max-w-2xl">
        <Lottie animationData={NoData}></Lottie>
      </div>;
    }
  }, [recoveryItem, user]);


  return (
    <div>
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
                <th className="border border-gray-300 px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {userRecovered.map((item) => (
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
                  <td className="border border-gray-300 px-6 py-3">
                    {item?.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllRecoveredItem;
