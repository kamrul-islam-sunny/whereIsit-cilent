import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const Update = () => {
    const {user} = useContext(AuthContext)
    const item = useLoaderData()
    // const {Date, category} = item
    const [startDate, setStartDate] = useState(new Date());
    const [allData, setAllData] = useState([])

    useEffect(()=>{
      axios.get(`http://localhost:4002/allItems`)
      .then(res => setAllData(res.data))
    }, [])
  
    console.log(item)
    const handleUpdateForm = (e) =>{
        e.preventDefault();
        const formUpdate = new FormData(e.target);
        const initialData = Object.fromEntries(formUpdate.entries());
        initialData.Date = startDate;
        const userUpdatedData = {...initialData};
        console.log(userUpdatedData)
        axios.put(`http://localhost:4002/item/${item._id}`, userUpdatedData)
        .then(res => {
          console.log(res.data)
          toast.success('successfully Update item.')
        })
    }
    return (
         <div className="flex flex-col-reverse lg:flex-row">
              {/* Right side input */}
              <div className="flex-[3] flex ">
                <section className="p-2 md:p-6 bg-white rounded-md shadow-md w-full">
                  <h2 className="text-lg font-semibold text-gray-700 capitalize">
                    Lost & Found Update
                  </h2>
                  <form onSubmit={handleUpdateForm}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                      {/* Post Type */}
                      <div>
                        <label className="text-gray-700" htmlFor="post_type">
                          Post Type
                        </label>
                        <select
                          name="post_type"
                          id="post_type"
                          defaultValue={item.post_type}
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
                          defaultValue={item.title}
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
                          defaultValue={item.thumbnail}
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
                          defaultValue={item.category}
                          className="border p-2 rounded-md w-full"
                        >
                          {
                            allData.map(item => <option key={item._id} value={item.category}>{item.category}</option>)
                          }
                        </select>
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
                          defaultValue={item.location}
                          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                        />
                      </div>
        
                      {/* Date Lost */}
                      <div className="flex flex-col gap-2">
                        <label className="text-gray-700">Date Lost</label>
                        <DatePicker
                          className="border p-2 rounded-md w-full"
                          selected={item.Date}
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
                          readOnly
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
                          readOnly
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
                        defaultValue={item.description}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                      ></textarea>
                    </div>
        
                    {/* Add Post Button */}
                    <div className="flex justify-end mt-6">
                      <button
                        type="submit"
                        className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                      >
                        Update Post
                      </button>
                    </div>
                  </form>
                </section>
              </div>
        
              {/* Left side banner */}
              <div className="flex-[2] border border-green-600">
                {/* <img
                  src="https://t4.ftcdn.net/jpg/00/90/92/25/360_F_90922570_pw5zemqkPsqA0EQ16QQZ3R9wXKGFSXT7.webp"
                  alt=""
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>
    );
};

export default Update;