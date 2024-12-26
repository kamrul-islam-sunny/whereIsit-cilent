import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Lottie from "lottie-react";
import NoData from "../../assets/animation/noData.json";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import useAxios from "../../hooks/useAxios";
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const AllRecoveredItem = () => {
  const [recoveryItem, setRecoveryItem] = useState([]);
  const [userRecovered, setUserRecovered] = useState([]);
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  const axiosSecure = useAxios()
  useEffect(() => {
    axiosSecure
      .get(`http://localhost:4002/recoveredDate?email=${userEmail}`)
      .then((res) => setRecoveryItem(res.data));
  }, []);


  useEffect(() => {
    if (recoveryItem.length === 0) {
      
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
        <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md">
      <Table>
        <Thead className="bg-gray-100">
          <Tr>
            <Th className="text-left px-4 py-2 text-sm font-semibold text-gray-700">Title</Th>
            <Th className="text-left px-4 py-2 text-sm font-semibold text-gray-700">Post Type</Th>
            <Th className="text-left px-4 py-2 text-sm font-semibold text-gray-700">Location</Th>
            <Th className="text-left px-4 py-2 text-sm font-semibold text-gray-700">Date</Th>
            <Th className="text-left px-4 py-2 text-sm font-semibold text-gray-700">Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {recoveryItem.map((item) => (
            <Tr key={item._id} className="hover:bg-gray-50 mb-2 rounded-lg  lg:rounded-none">
              <Td className="px-4 py-2 text-base text-gray-800 ">{item.title}</Td>
              <Td className="px-4 py-2 text-base text-gray-800">{item.post_type}</Td>
              <Td className="px-4 py-2 text-base text-gray-800">{item.location}</Td>
              <Td className="px-4 py-2 text-base text-gray-800">{new Date(item.Date).toLocaleDateString('en-GB')}</Td>
              <Td className="px-4 py-2 text-base text-gray-800">{item?.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      </div>
    </div>
    </div>
  );
};

export default AllRecoveredItem;
