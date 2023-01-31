import { useLocation, useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDevice,
  listDeviceDetails,
  deleteDevice,
} from "../../actions/deviceActions";

import alerts from "../../mockdata/alerts.json";

import NavbarUser from "../../components/NavbarUser";
import Footer from "../../components/Footer";
import AlertSidebar from "../../components/AlertSidebar";

const AlertEditScreen = () => {
  let { id } = useParams();
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const [enabled, setEnabled] = useState(false);
  const [name, setName] = useState("");
  const [device, setDevice] = useState("");
  const [field, setField] = useState("");
  const [checkingType, setCheckingType] = useState("");
  const [message, setMessage] = useState("");
  const [frequency, setFrequency] = useState("");
  const [active, setActive] = useState("");

  const alert = alerts.filter((item) => {
    return item.id === id;
  });

  useEffect(() => {
    if (!alert) {
      console.log("There is no alert!");
    } else {
      setName(alert.name);
      setDevice(alert.device);
      setCheckingType(alert.checkingType);
      setMessage(alert.message);
      setFrequency(alert.frequency);
      setActive(alert.active);
    }
  }, [dispatch, id]);

  const submitHandler = (e) => {
    e.preventDefault();

    // dispatch(
    //   updateDevice({
    //     id: id,
    //     name: name,
    //     device_type: type,
    //     location: location,
    //     description: description,
    //   })
    // );
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
      <NavbarUser alert />
      <div className="container">
        <button
          onClick={() => navigator(-1)}
          className="font-poppins text-rose-900 font-bold mb-5"
        >
          ← Back
        </button>

        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-poppins font-medium text-2xl">
              Modifying Alert Configuration
            </h1>
            <p className="font-poppins">
              Change the details of your alert with the settings down below.
            </p>
          </div>
        </div>

        <div className="flex mt-10">
          <div className="font-medium w-1/6 text-gray-700">
            <div className="sticky top-10">
              <AlertSidebar id={id} general />
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
                      Alert Name
                    </label>
                    <input
                      type="text"
                      name="deviceType"
                      value={device}
                      onChange={(e) => setDevice(e.target.value)}
                      placeholder="Enter your alert name"
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
                <h3 className="font-medium text-xl mb-4">Condition Check</h3>
                <hr />
                <p className="text-gray-700 mt-4">
                  Ensure that you input the right types and a distinct name to
                  identify your device in the device list section.
                </p>

                <div className="flex space-x-10 mt-4">
                  <div className="flex flex-col w-2/6">
                    <label
                      className="text-gray-700 font-semibold"
                      htmlFor="deviceName"
                    >
                      Target Device
                    </label>
                    <select
                      type="text"
                      name="deviceType2"
                      className="focus:outline-none border rounded-md py-1 px-4"
                    >
                      <option value="data">Data Field</option>
                      <option value="temperature">Temperature Sensor</option>
                      <option value="soil">Soil Sensor</option>
                      <option value="humidity">Humidity Sensor</option>
                      <option value="relay">Relay</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-2/6">
                    <label
                      className="text-gray-700 font-semibold"
                      htmlFor="deviceName"
                    >
                      Target Field
                    </label>
                    <select
                      type="text"
                      name="deviceType2"
                      className="focus:outline-none border rounded-md py-1 px-4"
                    >
                      <option value="data">Data Field</option>
                      <option value="temperature">Temperature Sensor</option>
                      <option value="soil">Soil Sensor</option>
                      <option value="humidity">Humidity Sensor</option>
                      <option value="relay">Relay</option>
                    </select>
                  </div>
                </div>

                <div className="flex space-x-10 mt-4">
                  <div className="flex flex-col w-2/6">
                    <label
                      className="text-gray-700 font-semibold"
                      htmlFor="deviceName"
                    >
                      Condition Type
                    </label>
                    <select
                      type="text"
                      name="deviceType2"
                      className="focus:outline-none border rounded-md py-1 px-4"
                    >
                      <option value="contains">contains</option>
                      <option value="contains">greater than</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-2/6">
                    <label
                      className="text-gray-700 font-semibold"
                      htmlFor="deviceName"
                    >
                      Check Value
                    </label>
                    <input
                      type="text"
                      name="deviceType"
                      value={device}
                      onChange={(e) => setDevice(e.target.value)}
                      placeholder="Enter your alert name"
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
                <h3 className="font-medium text-xl mb-4">
                  Alert Type and Message
                </h3>
                <hr />
                <p className="text-gray-700 mt-4">
                  Ensure that you input the right types and a distinct name to
                  identify your device in the device list section.
                </p>

                <div className="flex flex-col space-y-10 mt-4">
                  <div className="flex flex-col w-4/6">
                    <label
                      className="text-gray-700 font-semibold"
                      htmlFor="deviceName"
                    >
                      Alert Frequency
                    </label>
                    <select
                      type="text"
                      name="deviceType2"
                      className="focus:outline-none border rounded-md py-1 px-4"
                    >
                      <option value="false">Once</option>
                      <option value="true">Each Time</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-4/6">
                    <label
                      className="text-gray-700 font-semibold"
                      htmlFor="deviceName"
                    >
                      Message Content
                    </label>
                    <textarea
                      type="textarea"
                      name="deviceDescription"
                      placeholder="Eg.. Arduino Uno Rev3, ESP32, etc"
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

              {/* <div className="border rounded-md shadow-md p-8">
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
              </div> */}
            </form>

            <div className="border border-red-700 rounded-md shadow-md p-8">
              <h3 className="font-medium text-xl mb-4">Permanently Alert</h3>
              <hr />
              <p className="text-gray-700 mt-4">
                Permanently remove your alert and all of its data from the
                Agrobijak platform. This action is not reversible, so please
                continue with caution.
              </p>

              <div className="mt-10">
                <button
                  onClick={() => deleteHandler(id)}
                  className="font-poppins font-bold text-gray-200 rounded-md px-10 py-1 bg-rose-900"
                >
                  Delete Alert
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

export default AlertEditScreen;
