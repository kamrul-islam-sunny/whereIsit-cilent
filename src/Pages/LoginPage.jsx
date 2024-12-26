import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const LoginPage = () => {
  const { userLogin, userGoogleLogin, setEmail } = useContext(AuthContext);
  const location = useLocation()
  const navigate = useNavigate()
  const handleForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then((result) => {
        toast.success('Login Successfully!')
        // console.log(result);
        navigate(location?.state ? location.state : '/')
        
      })
      .catch((err) => {
        toast.error(err.message);
        // console.log(err.message)
        
      });
  };

  const handleGoogleSignIn = () => {
    userGoogleLogin()
      .then((result) => {
        toast.success('Login Successfully!')
        navigate(location?.state ? location.state : "/");
        // console.log(result.user)
      })
      .catch((err) => {
        toast.error(err.message);
        // console.log(err.message)
      });
  };
  return (
    <div>
        <Helmet>
              <title>Login</title>
            </Helmet>
      <div className="min-h-screen flex justify-center items-center ">
        <div className="card bg-gradient-to-r  w-full md:max-w-lg max-w-sm rounded-md py-10 shrink-0 shadow-2xl  border border-indigo-200 my-4">
          <h2 className="text-2xl  font-semibold text-center">
            Login your account
          </h2>
          <form onSubmit={handleForm} className="card-body">
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

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <button>
                  <Link
                    to={"/forgetPassword"}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </button>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-2xl btn-ghost bg-emerald-800  text-white hover:text-slate-950 hover:bg-emerald-600">
                Login
              </button>
            </div>
          </form>
          <h2 className="font-normal text-center">
            Dont’t Have An Account ?{" "}
            <Link className="text-indigo-700" to={"/register"}>
              Register
            </Link>
          </h2>
          <button
            onClick={handleGoogleSignIn}
            className="btn w-56 mx-auto mt-4"
          >
            <span className="text-2xl">
              <FcGoogle />
            </span>{" "}
            login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
