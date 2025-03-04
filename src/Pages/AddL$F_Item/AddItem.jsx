import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddItem = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const [allData, setAllData] = useState([]);
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [customCategory, setCustomCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://lost-found-server-side.vercel.app/allItems`)
      .then((res) => setAllData(res.data));
  }, []);

  const handleAddForm = (e) => {
    e.preventDefault();
    const formDate = new FormData(e.target);
    const initialData = Object.fromEntries(formDate.entries());
    initialData.Date = startDate;
    const userEmail = user.email;
    for (const key in initialData) {
      if (initialData[key] === "") {
        toast.error(`${key.toUpperCase()} is required! `);
        return;
      }
    }
    const userInfo = {
      userEmail,
      ...initialData,
      category: isCustomCategory ? customCategory : initialData.category,
    };
    axios.post("https://lost-found-server-side.vercel.app/addItems", userInfo).then((res) => {
      console.log(res.data.acknowledged);
      if (res.data.acknowledged) {
        toast.success("successfully add item.");
        navigate("/");
      }
    });
  };
  const handleCategoryChange = (e) => {
    if (e.target.value === "create_new") {
      setIsCustomCategory(true);
    } else {
      setIsCustomCategory(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-10 ">
      <Helmet>
        <title>Add item.</title>
      </Helmet>
      <section className="p-2 md:p-6 bg-white rounded-md shadow-md w-full border border-indigo-600 border-opacity-25">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Add Lost & Found
        </h2>
        <form onSubmit={handleAddForm}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* Post Type */}
            <div>
              <label className="text-gray-700" htmlFor="post_type">
                Post Type
              </label>
              <select
                name="post_type"
                id="post_type"
                className="border p-2 rounded-md w-full"
              >
                <option value="Lost">Lost</option>
                <option value="Found">Found</option>
              </select>
            </div>

            {/* Title */}
            <div>
              <label className="text-gray-700" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            {/* Thumbnail */}
            <div>
              <label className="text-gray-700" htmlFor="thumbnail">
                Thumbnail (Image URL)
              </label>
              <input
                id="thumbnail"
                name="thumbnail"
                type="url"
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            {/* Category */}
            <div>
              <label className="text-gray-700" htmlFor="category">
                Category
              </label>

              <select
                name="category"
                id="category"
                required
                className="border p-2 rounded-md w-full"
                onChange={handleCategoryChange}
              >
                {allData.map((item) => (
                  <option key={item._id} value={item.category}>
                    {item.category}
                  </option>
                ))}
                <option value="create_new">No</option>
                <option value="create_new">Create New Category</option>
              </select>
              {isCustomCategory && (
                <input
                  type="text"
                  placeholder="Enter new category"
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
              )}
            </div>

            {/* Location */}
            <div>
              <label className="text-gray-700" htmlFor="location">
                Location (Where the item was lost)
              </label>
              <input
                id="location"
                name="location"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            {/* Date Lost */}
            <div className="flex flex-col gap-2">
              <label className="text-gray-700">Date Lost</label>
              <DatePicker
                className="border p-2 rounded-md w-full"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            {/* Contact Information */}
            <div>
              <label className="text-gray-700" htmlFor="contact_name">
                Contact Name
              </label>
              <input
                id="contact_name"
                name="contact_name"
                type="text"
                defaultValue={user?.displayName || ""}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label className="text-gray-700" htmlFor="contact_email">
                Contact Email
              </label>
              <input
                id="contact_email"
                name="contact_email"
                type="email"
                defaultValue={user?.email || ""}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            ></textarea>
          </div>

          {/* Add Post Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              Add Post
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddItem;
