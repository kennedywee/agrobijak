import { Link } from "react-router-dom";
import { agrobijak } from "../assets";

const RegisterScreen = () => {
  return (
    <div classNameName="flex flex-col min-h-screen">
      <div classNameName="container w-full">
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

              <form className="mt-6" action="#" method="POST">
                <div>
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name=""
                    id=""
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
                    name=""
                    id=""
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
                    name=""
                    id=""
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
                    name=""
                    id=""
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
