import { Link } from "react-router-dom";
import Button from "./Button";

import { agrobijak, avatar } from "../assets";

const NavbarUser = (props) => {
  return (
    <nav className="border-b-[1px] border-gray-300 mb-8">
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <Link to="/">
            <img src={agrobijak} alt="agrobijak logo" />
          </Link>

          <ul className="list-none flex items-center justify-between">
            <Link to="/device">
              <li className="cursor-pointer font-poppins font-bold text-gray-800 rounded-lg px-10 py-1 mr-2 bg-amber-300">
                Device
              </li>
            </Link>

            <Link to="/dashboard">
              <li className="cursor-pointer font-poppins font-semibold text-gray-800 rounded-lg px-10 py-1 mr-2 ">
                Dashboard
              </li>
            </Link>

            <Link to="/schedule">
              <li className="cursor-pointer font-poppins font-semibold text-gray-800 rounded-lg px-10 py-1 mr-2">
                Schedule
              </li>
            </Link>

            <Link to="/alert">
              <li className="cursor-pointer font-poppins font-semibold text-gray-800 rounded-lg px-10 py-1">
                Alerts
              </li>
            </Link>
          </ul>

          <Link to="/signup">
            <img src={avatar} alt="avatar" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUser;
