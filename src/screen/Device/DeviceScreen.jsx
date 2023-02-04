import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { listDevices } from "../../actions/deviceActions";

import _ from "lodash";

// Header and Footer
import NavbarUser from "../../components/NavbarUser";
import Footer from "../../components/Footer";

import Device from "../../components/Device";

// Material UI Icons
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { PacmanLoader } from "react-spinners";

const DeviceScreen = () => {
  const dispatch = useDispatch();

  const deviceList = useSelector((state) => state.deviceList);
  const { error, loading, devices } = deviceList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listDevices());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser device />

      <div className="container w-full">
        <div className="flex items-center justify-between space-x-4">
          <h1 className="font-medium text-2xl">AgroBijak Devices</h1>
          {/* <div className="w-5/6 flex items-center border rounded-md py-1 ">
            <SearchIcon className="ml-2 mr-2" />
            <input
              type="text"
              placeholder="Search your device here.."
              className="w-full focus:outline-none"
            />
            <HighlightOffIcon className="mr-2" />
          </div> */}
          {userInfo && userInfo.isAdmin ? (
            <div className="">
              <Link to="/device/add">
                <button className="font-poppins font-bold text-gray-200 rounded-md px-10 py-1 bg-rose-900">
                  Add New Device
                </button>
              </Link>
            </div>
          ) : null}
        </div>

        {/* Device in Grid */}
        {!_.isEmpty(devices) ? (
          <div className="justify-center py-10">
            <div className="grid grid-cols-3 gap-12">
              {devices.map((device) => (
                <div
                  key={device.id}
                  className="col-span-1 border p-5 rounded-lg cursor-pointer hover:shadow-lg"
                >
                  <Device device={device} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center border h-[400px] rounded-lg my-6">
            <div className="items-center justify-center text-center">
              {userInfo && userInfo.isAdmin ? (
                <div>
                  <h1 className="font-poppins font-semibold mb-2">
                    This user has no device yet.
                  </h1>
                  <p className="font-poppins ">
                    Start adding and manage the device for farm with AgroBijak
                    Cloud Platform!
                  </p>
                  <Link to="/device/add">
                    <button className="font-poppins text-rose-900 font-bold underline mt-8">
                      New Device →
                    </button>
                  </Link>
                </div>
              ) : (
                <div>
                  <h1 className="font-bold text-lg mb-2">Under Contruction.</h1>
                  <h2 className="font-semibold mb-2">
                    Your device is not yet added to the system.
                  </h2>
                  <p>
                    Please wait patiently while our staff add your device
                    <br />
                    and configure your dashboard for your farm.
                  </p>
                  <PacmanLoader className="left-[40%] mt-3" color="#fbbf24" />
                </div>
              )}
            </div>
          </div>
        )}

        {/* device - empty */}

        {/* device - search not found */}
        <div className="hidden flex items-center justify-center border h-[400px] rounded-lg my-6">
          <div className="items-center justify-center text-center">
            <h1 className="font-poppins font-semibold mb-2">
              No Results Found
            </h1>
            <p className="font-poppins ">
              Your search for “something something” did not return any results.
            </p>
            <Link to="/device/add">
              <button className="font-poppins text-rose-900 font-bold underline mt-8">
                New Device →
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default DeviceScreen;
