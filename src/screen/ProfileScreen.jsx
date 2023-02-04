import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";
import AlertSidebar from "../components/AlertSidebar";
import UAWrapper from "../components/UAWrapper";
import UAWrapperContent from "../components/UAWrapperContent";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import { logout } from "../actions/userActions";

const ProfileScreen = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigator("/login");
    } else {
      if (!user || !user.name || userInfo.id !== user.id) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigator, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user.id, name, email, password }));
    }
  };

  const logoutHandler = () => {
    dispatch(logout());
    console.log("logout");
    navigator("/");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser />

      <div className="container">
        <button
          onClick={() => navigator(-1)}
          className="font-poppins text-rose-900 font-bold mb-5"
        >
          ← Back
        </button>

        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-poppins font-medium text-2xl">
              Profile Settings
            </h1>
            <p className="font-poppins">Change your profile details here.</p>
          </div>

          <div>
            <button
              onClick={logoutHandler}
              className="bg-rose-900 text-gray-200 font-bold  rounded-md px-10 py-1"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="flex mt-10">
          <div className="font-medium w-1/6 text-gray-700">
            <div className="sticky top-10">
              <AlertSidebar general />
            </div>
          </div>
          <div className="flex-grow space-y-16">
            <form className="space-y-16" onSubmit={submitHandler}>
              <UAWrapper
                title="General Information"
                description="Please provide your full name and email address."
              >
                <UAWrapperContent>
                  <label className="text-gray-700 font-semibold" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="focus:outline-none border rounded-md py-1 px-4"
                  />
                </UAWrapperContent>

                <UAWrapperContent>
                  <label
                    className="text-gray-700 font-semibold"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email name"
                    className="focus:outline-none border rounded-md py-1 px-4"
                  />
                </UAWrapperContent>
              </UAWrapper>

              <UAWrapper
                title="Security"
                description="Change your password here."
              >
                <UAWrapperContent>
                  <label
                    className="text-gray-700 font-semibold"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="focus:outline-none border rounded-md py-1 px-4"
                  />
                </UAWrapperContent>

                <UAWrapperContent>
                  <label
                    className="text-gray-700 font-semibold"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="focus:outline-none border rounded-md py-1 px-4"
                  />
                </UAWrapperContent>
              </UAWrapper>

              <UAWrapper
                title="Save Changes"
                description="Ensure that all details are correct!"
                borderColor="yellow"
              >
                <UAWrapperContent>
                  <button
                    type="submit"
                    className="font-bold text-gray-200 rounded-md px-5 py-1 bg-rose-900"
                  >
                    Save Changes
                  </button>
                </UAWrapperContent>
              </UAWrapper>
            </form>
          </div>
        </div>
      </div>

      <div className="flex mt-10">
        <div className="font-medium w-1/6 text-gray-700">
          <div className="sticky top-10">
            <AlertSidebar general />
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default ProfileScreen;
