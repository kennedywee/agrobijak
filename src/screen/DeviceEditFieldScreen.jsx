import { Link, useParams } from "react-router-dom";

import { useState } from "react";
import { Switch } from "@headlessui/react";

import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";
import DeviceSidebar from "../components/DeviceSidebar";

const DeviceEditFieldScreen = () => {
  let { id } = useParams();
  const [enabled, setEnabled] = useState(false);

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
            <Link to="/device/edit">
              <button className="font-poppins font-bold text-gray-200 rounded-md px-10 py-1 bg-rose-900">
                Disabled
              </button>
            </Link>
          </div>
        </div>

        <div className="flex mt-10">
          <div className="font-medium w-1/6 text-gray-700">
            <div className="sticky top-10">
              <DeviceSidebar id={id} fields />
            </div>
          </div>
          <div className="flex-grow space-y-16">
            <div className="border rounded-md shadow-md p-8">
              <h3 className="font-medium text-xl mb-4">Device Fields</h3>
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
                    1. Field Type
                  </label>
                  <select
                    type="text"
                    name="deviceName"
                    placeholder="Eg.. Arduino Uno Rev3, ESP32, etc"
                    className="focus:outline-none border rounded-md py- px-4"
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
                    1. Field Name
                  </label>
                  <input
                    type="text"
                    name="deviceName"
                    placeholder="Eg.. Arduino Uno Rev3, ESP32, etc"
                    className="focus:outline-none border rounded-md py-1 px-4"
                  />
                </div>
              </div>

              <div className="flex space-x-10 mt-4">
                <div className="flex flex-col w-2/6">
                  <label
                    className="text-gray-700 font-semibold"
                    htmlFor="deviceName"
                  >
                    2. Field Type
                  </label>
                  <select
                    type="text"
                    name="deviceName"
                    placeholder="Eg.. Arduino Uno Rev3, ESP32, etc"
                    className="focus:outline-none border rounded-md py- px-4"
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
                    2. Field Name
                  </label>
                  <input
                    type="text"
                    name="deviceName"
                    placeholder="Eg.. Arduino Uno Rev3, ESP32, etc"
                    className="focus:outline-none border rounded-md py-1 px-4"
                  />
                </div>
              </div>

              <div className="flex space-x-10 mt-4">
                <div className="flex flex-col w-2/6">
                  <label
                    className="text-gray-700 font-semibold"
                    htmlFor="deviceName"
                  >
                    3. Field Type
                  </label>
                  <select
                    type="text"
                    name="deviceName"
                    placeholder="Eg.. Arduino Uno Rev3, ESP32, etc"
                    className="focus:outline-none border rounded-md py- px-4"
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
                    3. Field Name
                  </label>
                  <input
                    type="text"
                    name="deviceName"
                    placeholder="Eg.. Arduino Uno Rev3, ESP32, etc"
                    className="focus:outline-none border rounded-md py-1 px-4"
                  />
                </div>
              </div>

              <div className="flex space-x-10 mt-4">
                <div className="flex flex-col w-2/6">
                  <label
                    className="text-gray-700 font-semibold"
                    htmlFor="deviceName"
                  >
                    4. Field Type
                  </label>
                  <select
                    type="text"
                    name="deviceName"
                    placeholder="Eg.. Arduino Uno Rev3, ESP32, etc"
                    className="focus:outline-none border rounded-md py- px-4"
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
                    4. Field Name
                  </label>
                  <input
                    type="text"
                    name="deviceName"
                    placeholder="Eg.. Arduino Uno Rev3, ESP32, etc"
                    className="focus:outline-none border rounded-md py-1 px-4"
                  />
                </div>
              </div>

              <div className="flex space-x-10 mt-4">
                <div className="flex flex-col w-2/6">
                  <label
                    className="text-gray-700 font-semibold"
                    htmlFor="deviceName"
                  >
                    5. Field Type
                  </label>
                  <select
                    type="text"
                    name="deviceName"
                    placeholder="Eg.. Arduino Uno Rev3, ESP32, etc"
                    className="focus:outline-none border rounded-md py- px-4"
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
                    5. Field Name
                  </label>
                  <input
                    type="text"
                    name="deviceName"
                    placeholder="Eg.. Arduino Uno Rev3, ESP32, etc"
                    className="focus:outline-none border rounded-md py-1 px-4"
                  />
                </div>
              </div>

              <div className="mt-10">
                <button className="font-poppins font-bold text-gray-200 rounded-md px-10 py-1 bg-rose-900">
                  Save and Next
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

export default DeviceEditFieldScreen;
