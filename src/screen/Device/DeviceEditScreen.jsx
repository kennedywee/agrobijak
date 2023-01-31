import { Link, useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDevice,
  listDeviceDetails,
  deleteDevice,
} from "../../actions/deviceActions";

import NavbarUser from "../../components/NavbarUser";
import Footer from "../../components/Footer";
import DeviceSidebar from "../../components/DeviceSidebar";

const DeviceEditScreen = () => {
  let { id } = useParams();
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [enabled, setEnabled] = useState(false);

  const deviceDetails = useSelector((state) => state.deviceDetails);
  const { device } = deviceDetails;

  useEffect(() => {
    if (!device) {
      dispatch(listDeviceDetails(id));
    } else {
      setType(device.device_type);
      setName(device.name);
      setLocation(device.location);
      setDescription(device.description);
      setEnabled(device.active);
    }
  }, [dispatch, id]);

  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateDevice({
        id: id,
        name: name,
        device_type: type,
        location: location,
        description: description,
      })
    );
    navigate(redirect);
  };

  const deleteHandler = (id) => {
    dispatch(deleteDevice(id));
    navigator("/device");
  };

  const enableHandler = () => {
    setEnabled(!enabled);
    dispatch(
      updateDevice({
        id: id,
        active: enabled,
      })
    );
  };

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
            <h1 className="font-poppins font-medium text-2xl">
              Modifying Device Settings
            </h1>
            <p className="font-poppins">
              Change the details of your device with the settings down below.
            </p>
          </div>
          <div>
            <button
              onClick={enableHandler}
              className={`${
                enabled ? "bg-rose-900 text-gray-200" : "bg-gray-900 text-white"
              } font-bold  rounded-md px-10 py-1`}
            >
              {enabled ? "Enabled" : "Disabled"}
            </button>
          </div>
        </div>

        <div className="flex mt-10">
          <div className="font-medium w-1/6 text-gray-700">
            <div className="sticky top-10">
              <DeviceSidebar id={id} general />
            </div>
          </div>
          <div className="flex-grow space-y-16">
            <form className="space-y-16" onSubmit={submitHandler}>
              <div className="border rounded-md shadow-md p-8">
                <h3 className="font-medium text-xl mb-4">
                  General Information
                </h3>
                <hr />
                <p className="text-gray-700 mt-4">
                  Ensure that you input the right types and a distinct name to
                  identify your device in the device list section.
                </p>

                <div className="flex space-x-10 mt-4">
                  <div className="flex flex-col w-2/6">
                    <label
                      className="text-gray-700 font-semibold"
                      htmlFor="deviceType"
                    >
                      Device Type {type}
                    </label>
                    <input
                      type="text"
                      name="deviceType"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      placeholder="Eg.. Arduino Uno Rev3, ESP32, etc"
                      className="focus:outline-none border rounded-md py-1 px-4"
                    />
                  </div>

                  <div className="flex flex-col w-2/6">
                    <label
                      className="text-gray-700 font-semibold"
                      htmlFor="deviceName"
                    >
                      Device Name
                    </label>
                    <input
                      type="text"
                      name="deviceName"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Eg.. Arduino Uno Rev3, ESP32, etc"
                      className="focus:outline-none border rounded-md py-1 px-4"
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="font-poppins font-bold text-gray-200 rounded-md px-10 py-1 bg-rose-900"
                  >
                    Save Changes
                  </button>
                </div>
              </div>

              <div className="border rounded-md shadow-md p-8">
                <h3 className="font-medium text-xl mb-4">Meta Data</h3>
                <hr />
                <p className="text-gray-700 mt-4">
                  Ensure that you input the right types and a distinct name to
                  identify your device in the device list section.
                </p>

                <div className="flex flex-col space-y-10 mt-4">
                  <div className="flex flex-col w-4/6">
                    <label
                      className="text-gray-700 font-semibold"
                      htmlFor="deviceLocation"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      name="deviceLocation"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Eg.. Penampang, Sabah"
                      className="focus:outline-none border rounded-md py-1 px-4"
                    />
                  </div>

                  <div className="flex flex-col w-4/6">
                    <label
                      className="text-gray-700 font-semibold"
                      htmlFor="deviceDescription"
                    >
                      Description
                    </label>
                    <textarea
                      type="textarea"
                      name="deviceDescription"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Write the description of the device"
                      className="focus:outline-none h-[150px] border rounded-md py-1 px-4"
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="font-poppins font-bold text-gray-200 rounded-md px-10 py-1 bg-rose-900"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </form>

            <div className="border border-red-700 rounded-md shadow-md p-8">
              <h3 className="font-medium text-xl mb-4">
                Permanently Delete Device
              </h3>
              <hr />
              <p className="text-gray-700 mt-4">
                Permanently remove your device and all of its data from the
                Agrobijak platform. This action is not reversible, so please
                continue with caution.
              </p>

              <div className="mt-10">
                <button
                  onClick={() => deleteHandler(id)}
                  className="font-poppins font-bold text-gray-200 rounded-md px-10 py-1 bg-rose-900"
                >
                  Delete Device
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default DeviceEditScreen;
