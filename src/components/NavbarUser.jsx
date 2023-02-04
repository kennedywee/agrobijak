import {
  Link,
  useNavigate,
  useLocation,
  useRouteError,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import MenuDropDown from "./MenuDropDown";

import { agrobijak, avatar } from "../assets";

const NavbarUser = ({ device, dashboard, schedule, alert, admin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  console.log(userInfo);

  const logoutHandler = () => {
    dispatch(logout());
    navigate(redirect);
  };

  return (
    <nav className="border-b-[1px] border-gray-300 mb-8">
      {!admin && userInfo && userInfo.isAdmin ? (
        <div className="bg-red-700 text-white p-2 sticky top-0">
          <div className="container flex justify-between items-center">
            <h1>You are now configuring: {userInfo.selectedUser}</h1>
            <Link to="/admin">
              <button className="font-semibold border py-1 px-2 hover:bg-white hover:text-red-700">
                Go Back To Admin Page
              </button>
            </Link>
          </div>
        </div>
      ) : null}

      <div className="container">
        <div className="flex items-center justify-between py-6">
          <Link to="/">
            <img src={agrobijak} alt="agrobijak logo" />
          </Link>

          <ul className="list-none flex items-center justify-between">
            <Link to="/device">
              <li
                className={`cursor-pointer font-poppins font-bold text-gray-800 rounded-lg px-10 py-1 mr-2 ${
                  device ? "bg-amber-300" : "bg-white"
                }`}
              >
                Device
              </li>
            </Link>

            <Link to="/dashboard">
              <li
                className={`cursor-pointer font-poppins font-bold text-gray-800 rounded-lg px-10 py-1 mr-2 ${
                  dashboard ? "bg-amber-300" : "bg-white"
                }`}
              >
                Dashboard
              </li>
            </Link>

            <Link to="/schedule">
              <li
                className={`cursor-pointer font-poppins font-bold text-gray-800 rounded-lg px-10 py-1 mr-2 ${
                  schedule ? "bg-amber-300" : "bg-white"
                }`}
              >
                Schedule
              </li>
            </Link>

            <Link to="/alert">
              <li
                className={`cursor-pointer font-poppins font-bold text-gray-800 rounded-lg px-10 py-1 ${
                  alert ? "bg-amber-300" : "bg-white"
                }`}
              >
                Alerts
              </li>
            </Link>
          </ul>

          <div className="flex flex-row items-center">
            <h1 className="mr-4">{userInfo.name}</h1>
            <Link to="/profile">
              <img src={avatar} alt="avatar" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser;
