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

import WidgetTest from "./WidgetTest";
import { PacmanLoader } from "react-spinners";

import AgroGridArea from "../../widgets/AgroGridArea";
import { WIDGET_CREATE_RESET } from "../../constants/widgetConstants";

const WidgetScreen = () => {
  const dispatch = useDispatch();

  const widgetList = useSelector((state) => state.widgetList);
  const { widgets } = widgetList;

  const deviceList = useSelector((state) => state.deviceList);
  const { devices } = deviceList;

  const widgetCreate = useSelector((state) => state.widgetCreate);
  const { success, widget: widgetCreated } = widgetCreate;

  const dashboardDataList = useSelector((state) => state.dashboardData);
  const { data } = dashboardDataList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (success) {
      dispatch({ type: WIDGET_CREATE_RESET });
    }
    dispatch(listWidgets());
    dispatch(listDevices());
    dispatch(dashboardData());
  }, [dispatch, success]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser dashboard />

      <div className="container w-full">
        <div className="flex items-center justify-between space-x-4">
          <h1 className="font-medium text-2xl">AgroBijak Dashboard</h1>
          {userInfo && userInfo.isAdmin ? (
            <div className="">
              <Link to="/dashboard/add">
                <button className="font-poppins font-bold text-gray-200 rounded-md px-10 py-1 bg-rose-900">
                  Add New Widget
                </button>
              </Link>
            </div>
          ) : null}
        </div>

        {/* <WidgetTest /> */}

        {!_.isEmpty(widgets) ? (
          <div className="justify-center py-10">
            <AgroGridArea widgets={widgets} devices={devices} data={data} />
          </div>
        ) : (
          <div className="flex items-center justify-center border h-[400px] rounded-lg my-6">
            <div className="items-center justify-center text-center">
              {userInfo && userInfo.isAdmin ? (
                <div>
                  <h1 className="font-poppins font-semibold mb-2">
                    This user has no widget yet.
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
              ) : (
                <div className="flex flex-col justify-center">
                  <h1 className="font-bold text-lg mb-2">Under Contruction.</h1>
                  <h1 className="font-semibold mb-2">
                    Your dashboard is not yet ready.
                  </h1>
                  <p>
                    Please wait patiently while our staff add your device
                    <br />
                    and configure your dashboard for your farm
                  </p>
                  <PacmanLoader className="left-[40%] mt-3" color="#fbbf24" />
                </div>
              )}
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
