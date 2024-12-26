import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import Lottie from "lottie-react";
import NoData from "../../assets/animation/noData.json";
import useAxios from "../../hooks/useAxios";
import AllRecoveryCart from "../../components/AllRecoveryCart";
import AllRecoveryTable from "../../components/AllRecoveryTable";
import { HiOutlineBars4 } from "react-icons/hi2";
import { BsGrid3X3Gap } from "react-icons/bs";

const AllRecoveredItem = () => {
  const [recoveryItem, setRecoveryItem] = useState([]);
  const [userRecoveryItem, setUserRecoveryItem] = useState([]);
  const [isTable, setIsTable] = useState(true);
  const { user } = useContext(AuthContext);
  const userEmail = user.email;

  const axiosSecure = useAxios();
  useEffect(() => {
    axiosSecure
      .get(`http://localhost:4002/recoveredDate?email=${userEmail}`)
      .then((res) => setRecoveryItem(res.data));
  }, []);

  console.log(recoveryItem);
  useEffect(() => {
    const reDate = recoveryItem.filter((item) => item.status === "recovered");
    setUserRecoveryItem(reDate);
  }, [recoveryItem, user]);
  console.log("re filtering", userRecoveryItem);

  return (
    <div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">
          My Items
        </h2>
        <div className="flex justify-end gap-2 py-4">
          <p onClick={()=>setIsTable(true)} className={ isTable ? 'text-3xl text-blue-600' : 'text-3xl text-slate-800' }><BsGrid3X3Gap /></p>
          <p onClick={()=>setIsTable(false)} className={ !isTable ? 'text-3xl text-blue-600' : 'text-3xl text-slate-800' }><HiOutlineBars4 /></p>
        </div>
        {/* <AllRecoveryTable userRecoveryItem={userRecoveryItem}></AllRecoveryTable> */}
        {userRecoveryItem.length === 0 && (
          <div className="text-center mx-auto py-4 max-w-xl">
            <Lottie animationData={NoData}></Lottie>
          </div>
        )}
        <div className="">
          {isTable === true ? (
            <AllRecoveryCart
              userRecoveryItem={userRecoveryItem}
            ></AllRecoveryCart>
          ) : (
            <AllRecoveryTable
              userRecoveryItem={userRecoveryItem}
            ></AllRecoveryTable>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllRecoveredItem;
