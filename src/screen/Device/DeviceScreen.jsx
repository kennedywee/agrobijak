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

import InfoBar from "../../components/InfoBar";
import Loader from "../../components/Loader";

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
        {loading ? (
          <Loader />
        ) : error ? (
          <InfoBar error={error} />
        ) : (
          <>
            <div className="flex items-center justify-between space-x-4">
              <h1 className="font-medium text-2xl">AgroBijak Devices</h1>
              {userInfo && userInfo.isAdmin && (
                <div>
                  <Link to="/device/add">
                    <button className="font-poppins font-bold text-gray-200 rounded-md px-10 py-1 bg-rose-900">
                      Add New Device
                    </button>
                  </Link>
                </div>
              )}
            </div>
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
                    <>
                      <h1 className="font-poppins font-semibold mb-2">
                        This user has no device yet.
                      </h1>
                      <p className="font-poppins ">
                        Start adding and manage the device for farm with
                        AgroBijak Cloud Platform!
                      </p>
                      <Link to="/device/add">
                        <button className="font-poppins text-rose-900 font-bold underline mt-8">
                          New Device →
                        </button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <h1 className="font-bold text-lg mb-2">
                        Under Construction.
                      </h1>
                      <h2 className="font-semibold mb-2">
                        Your device is not yet added to the system.
                      </h2>
                      <p>
                        Please wait patiently while our staff add your device
                        and configure your dashboard for your farm.
                      </p>
                      <PacmanLoader
                        className="left-[40%] mt-3"
                        color="#fbbf24"
                      />
                    </>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default DeviceScreen;
