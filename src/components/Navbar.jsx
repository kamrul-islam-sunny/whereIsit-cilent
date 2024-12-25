import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const Links = (
    <>
      <li className="text-base font-medium">
        <Link to={""}>Home</Link>
      </li>
      <li className="text-base font-medium">
        <Link to={"/allItems"}>Lost & Found Items Page</Link>
      </li>
    </>
  );

  const { user, userLogout } = useContext(AuthContext);
  console.log(user)

  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end">
        {user && user.email ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full ring-primary ring-offset-indigo-100 ring ring-offset-2 ">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <li className="text-lg font-medium ">
                  <Link to={"/addItems"} className="justify-between">
                    Add Lost & Found 
                  </Link>
                </li>
                <li className="text-lg font-medium ">
                  <Link to={'/allRecovered'}>Recovered Items</Link>
                </li>
                <li className="text-lg font-medium ">
                  <Link to={'/myItems'}>Manage My Items</Link>
                </li>
              </ul>
            </div>
            <button onClick={userLogout} className=" bg-indigo-600 hover:bg-indigo-700 text-white text-base font-medium btn btn-primary">
              <Link>Logout</Link>
            </button>
          </>
        ) : (
          <>
            <button className="btn bg-indigo-600 text-white hover:bg-indigo-700 text-base font-medium mr-4 ">
              <Link to={"/login"}>login</Link>
            </button>
            {/* <button className="btn bg-indigo-600 hover:bg-indigo-700 text-white text-base font-medium">
              <Link to={"/register"}>register</Link>
            </button> */}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
