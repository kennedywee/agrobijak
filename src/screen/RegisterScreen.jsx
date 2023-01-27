import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { agrobijak } from "../assets";

import { register } from "../actions/userActions";

const RegisterScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Password does not match");
    } else {
      dispatch(register(name, email, password));
      navigate("/device");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full">
        <section className="flex flex-col md:flex-row h-screen items-center">
          <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
            <div className="w-full h-100">
              <div className="flex justify-center">
                <img src={agrobijak} alt="agrobijak logo" />
              </div>

              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
                Get your free account now!
              </h1>

              <form onSubmit={submitHandler} className="mt-6" method="POST">
                <div>
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Full Name"
                    className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-rose-900 focus:bg-white focus:outline-none"
                    autofocus
                    autocomplete
                    required
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address"
                    className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-rose-900 focus:bg-white focus:outline-none"
                    autofocus
                    autocomplete
                    required
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    minlength="6"
                    className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-rose-900 focus:bg-white focus:outline-none"
                    required
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Enter Confirm Password"
                    minlength="6"
                    className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-rose-900 focus:bg-white focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full block bg-rose-900 hover:bg-rose-700 text-white font-semibold rounded-lg px-4 py-2 mt-10"
                >
                  Sign Up
                </button>
              </form>

              <hr className="my-6 border-gray-300 w-full" />

              <p className="mt-8">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="text-rose-900 cursor-pointer hover:text-rose-600 font-semibold">
                    Login here
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RegisterScreen;
