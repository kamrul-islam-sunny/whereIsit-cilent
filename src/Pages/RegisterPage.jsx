import React, { useContext, useState } from "react";
import toast from "react-hot-toast";

import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const RegisterPage = () => {
  const { userRegister, UpdateUserProfile, userGoogleLogin } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleShowPass = () => setShow(!show);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const user = { name, email, photo};

    // TODO ADD MY SERVER SIDE LINK

    // const passRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    // if (!passRegex.test(password)) {
    //   toast.error(
    //     "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
    //   );
    //   return;
    // }
    userRegister(email, password)
      .then((result) => {
        toast.success('Successfully Register!')
        navigate(location?.state ? location.state : "/");
        UpdateUserProfile({ displayName: name, photoURL: photo })
          .then((result) => {
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((err) => {
        toast.error(err.message);
        // console.log(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    userGoogleLogin()
      .then((result) => {
        toast.success('Successfully Register!')
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="min-h-screen flex justify-center py-10 items-center ">
      <div className="card  bg-gradient-to-r  w-full md:max-w-lg max-w-sm rounded-lg py-10 shrink-0  border border-sky-200">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="input input-bordered"
              // {required && toast.error('name required')}
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <a
              onClick={handleShowPass}
              className="text-xl cursor-pointer absolute top-12 right-5"
            >
              {show ? <IoEye /> : <IoMdEyeOff />}
            </a>
          </div>
          <div className="form-control mt-6">
            <button className="btn text-2xl btn-ghost bg-emerald-800  text-white hover:text-slate-950 hover:bg-emerald-500">
              Register
            </button>
          </div>
        </form>
        <h2 className="font-normal text-center">
          Already Have an account ? 
          <Link className="text-indigo-700 text-lg" to={"/login"}>
             Login
          </Link>
        </h2>
        <button onClick={handleGoogleSignIn} className="btn w-56 mx-auto mt-4">
          <span className="text-2xl">
            <FcGoogle />
          </span>
          Register with Google
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
