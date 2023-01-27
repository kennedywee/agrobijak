import { Link } from "react-router-dom";
import Button from "./Button";

import { agrobijak, avatar } from "../assets";

const NavbarUser = ({ device, dashboard, schedule, alert }) => {
  return (
    <nav className="border-b-[1px] border-gray-300 mb-8">
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
            <h3 className="mr-4">Kennedy Wee</h3>
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
