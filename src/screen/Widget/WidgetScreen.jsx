import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { listWidgets } from "../../actions/widgetActions";
import { listDevices } from "../../actions/deviceActions";
import { dashboardData } from "../../actions/dataActions";

import NavbarUser from "../../components/NavbarUser";
import Footer from "../../components/Footer";

// Material UI Icons
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import AgroGridArea from "../../widgets/AgroGridArea";

const WidgetScreen = () => {
  const dispatch = useDispatch();

  const widgetList = useSelector((state) => state.widgetList);
  const { widgets } = widgetList;

  const deviceList = useSelector((state) => state.deviceList);
  const { devices } = deviceList;

  const dashboardDataList = useSelector((state) => state.dashboardData);
  const { data } = dashboardDataList;

  useEffect(() => {
    dispatch(listWidgets());
    dispatch(listDevices());
    dispatch(dashboardData());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser dashboard />

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
            <Link to="/dashboard/add">
              <button className="font-poppins font-bold text-gray-200 rounded-md px-10 py-1 bg-rose-900">
                Add New
              </button>
            </Link>
          </div>
        </div>

        {/* Widget in Grid */}
        {!_.isEmpty(widgets) ? (
          <div className="justify-center py-10">
            <AgroGridArea widgets={widgets} devices={devices} data={data} />
          </div>
        ) : (
          <div className="flex items-center justify-center border h-[400px] rounded-lg my-6">
            <div className="items-center justify-center text-center">
              <h1 className="font-poppins font-semibold mb-2">
                Hello! Welcome to AgroBijak
              </h1>
              <p className="font-poppins ">
                Start adding and manage the widgets for farm with AgroBijak
                Cloud Platform!
              </p>
              <Link to="/dashboard/add">
                <button className="font-poppins text-rose-900 font-bold underline mt-8">
                  New Widget →
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default WidgetScreen;
