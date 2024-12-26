import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import toast from "react-hot-toast";

const Modal = ({ itemDate, setDetailsDate }) => {
  const [recoveryDate, setRecoveryDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  const [recoveryData, setRecoveryData] = useState(null);

  const handleRecoveredFrom = (e) => {
    e.preventDefault();
    // const form = e.target.value
    const recovered_location = e.target.recovered_location.value;
    const email = user.email;
    const itemId = itemDate._id;
    const recoveryInfo = { recovered_location, recoveryDate, email, itemId };
    console.log(recoveryInfo);

    axios
      .post("http://localhost:4002/recoveredItem", recoveryInfo)
      .then((res) => console.log(res.data));

    if (recovered_location) {
      const data = {
        status: "recovered",
      };
      axios
        .patch(`http://localhost:4002/item/${itemDate._id}`, data)
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            setDetailsDate({ ...itemDate, status: "recovered" });
            toast.success('Recovered')
          }
        });
    }
  };



  const closeModal = () => {
    const modal = document.getElementById("my_modal_1");
    if (modal) modal.close();
  };

  return (
    <div>


      {/* Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box relative">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="text-lg font-bold mb-4">Recovered Item Details</h3>

          {/* Form Inside Modal */}
          <form onSubmit={handleRecoveredFrom}>
            <div className="grid grid-cols-1 gap-6">
              {/* Recovered Location */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="recovered_location"
                >
                  Recovered Location
                </label>
                <input
                  id="recovered_location"
                  name="recovered_location"
                  type="text"
                  placeholder="Enter the location"
                  className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              {/* Recovery Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date Recovered
                </label>
                <DatePicker
                  className="mt-1 w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  selected={recoveryDate}
                  onChange={(date) => setRecoveryDate(date)}
                />
              </div>

              {/* Recovered Person Info */}
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="recovered_name"
                >
                  Recovered Person Name
                </label>
                <input
                  id="recovered_name"
                  type="text"
                  value={user?.displayName || "N/A"}
                  readOnly
                  className="mt-1 block w-full px-4 py-2 text-gray-500 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none sm:text-sm"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="recovered_email"
                >
                  Recovered Person Email
                </label>
                <input
                  id="recovered_email"
                  type="email"
                  value={user?.email || "N/A"}
                  readOnly
                  className="mt-1 block w-full px-4 py-2 text-gray-500 bg-gray-100 border border-gray-300 rounded-lg shadow-sm focus:outline-none sm:text-sm"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="recovered_image"
                >
                  Recovered Person Image
                </label>
                <div className="mt-2 flex items-center gap-4">
                  <img
                    src={user?.photoURL || "https://via.placeholder.com/50"}
                    alt="Recovered Person"
                    className="w-16 h-16 rounded-full border border-gray-300 shadow-sm"
                  />
                  <span className="text-sm text-gray-500">
                    Image of the recovered person
                  </span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-6">
              <button
                type="submit"
                onClick={closeModal}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition duration-150"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
