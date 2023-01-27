import { Link } from "react-router-dom";

import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";

// Material UI Icons
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import Alert from "../components/Alert";

const AlertScreen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser alert />

      <div className="container w-full">
        <div className="flex items-center justify-between space-x-4">
          <div className="w-5/6 flex items-center border rounded-md py-1 ">
            <SearchIcon className="ml-2 mr-2" />
            <input
              type="text"
              placeholder="Search your device here.."
              className="w-full focus:outline-none"
            />
            <HighlightOffIcon className="mr-2" />
          </div>
          <div className="">
            <Link to="/device/add">
              <button className="font-poppins font-bold text-gray-200 rounded-md px-10 py-1 bg-rose-900">
                Add New
              </button>
            </Link>
          </div>
        </div>

        {/* alert in Grid */}
        <div className="justify-center py-10">
          <div className="grid grid-cols-3 gap-12">
            <Alert />
            <Alert />
            <Alert />
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default AlertScreen;
