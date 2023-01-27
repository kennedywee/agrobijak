import { Link } from "react-router-dom";
import Button from "./Button";

import { agrobijak } from "../assets";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={agrobijak} alt="agrobijak logo" />
        </Link>

        <ul className="list-none flex items-center justify-between">
          <Link to="/">
            <li className="font-medium text-gray-800 cursor-pointer mr-12">
              Features
            </li>
          </Link>

          <Link to="/">
            <li className="font-medium text-gray-800 cursor-pointer mr-12">
              About
            </li>
          </Link>

          <Link to="/">
            <li className="font-medium text-gray-800 cursor-pointer mr-12">
              Pricing
            </li>
          </Link>

          <Link>
            <li className="font-medium text-gray-800 cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>

        <Link to="/login">
          <Button>Sign In</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
