import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { devicephoto } from "../assets";

import { listDeviceDetails } from "../actions/deviceActions";

import devices from "../constants/devices.json";

import DaysAgo from "../components/DaysAgo.jsx";

const DeviceDetailScreen = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const deviceDetails = useSelector((state) => state.deviceDetails);
  const { loading, error, device } = deviceDetails;

  useEffect(() => {
    dispatch(listDeviceDetails(id));
  }, [dispatch, id]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser device />

      <div className="container">
        <Link to="/device">
          <button className="font-poppins text-rose-900 font-bold mb-5">
            ← Back
          </button>
        </Link>

        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-poppins font-medium text-2xl">{device.name}</h1>
            <p className="font-poppins">
              Below are the details of your device.
            </p>
          </div>

          <div>
            <Link to="/device/edit">
              <button className="font-poppins font-bold text-gray-200 rounded-md px-10 py-1 bg-rose-900">
                Settings
              </button>
            </Link>
          </div>
        </div>

        <div className="flex border h-[300px] mt-10 rounded-lg">
          <div className="flex items-center justify-center w-[300px] border rounded-lg shadow-md m-8">
            <div className="items-center justify-center text-center">
              <img src={devicephoto} alt="Device Photo" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center ml-5 ">
            <div className="items-center justify-center">
              <h4 className="text-gray-600 font-semibold">DOMAIN/API KEY</h4>
              <p className="text-blue-700 mb-5">
                https://agrobijak.com/api/device/?api_key=
                <span>{device.api_key}</span>
              </p>

              <h4 className="text-gray-600 font-semibold">API KEY</h4>
              <p className="text-blue-700 mb-5">{device.api_key}</p>

              <div className="flex text-gray-600 mb-5">
                <div className="mr-16">
                  <h4 className=" font-semibold">Status </h4>

                  <FiberManualRecordIcon
                    className={
                      device.active > 0
                        ? "text-green-600 mr-1"
                        : "text-red-600 mr-1"
                    }
                    fontSize="small"
                  />
                  <span>{device.active > 0 ? "Active" : "Deactive"}</span>
                </div>

                <div>
                  <h4 className="text-gray-600 font-semibold">Location</h4>
                  <p>{device.location}</p>
                </div>
              </div>

              <div className="flex text-gray-600">
                <div className="mr-11">
                  <h4 className=" font-semibold">Created </h4>
                  <DaysAgo deviceDate={device.created} />
                </div>

                <div>
                  <h4 className=" font-semibold">Updated</h4>
                  <DaysAgo deviceDate={device.updated} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-14">
          <h1 className="font-poppins font-medium text-2xl">
            Data Transaction History
          </h1>
          <p className="font-poppins">
            The data transaction history is based on data that is updated by
            your device.
          </p>
        </div>

        <div className="flex items-center justify-center border h-[300px] rounded-lg my-6">
          <div className="items-center justify-center text-center">
            <h1 className="font-poppins font-semibold mb-2">
              There are no data from this device yet!
            </h1>
            <p>Start adding data to your device with the API given.</p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default DeviceDetailScreen;
