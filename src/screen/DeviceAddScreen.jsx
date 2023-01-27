import { Link } from "react-router-dom";

import { useState } from "react";

import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";

import DeviceSidebar from "../components/DeviceSidebar";

const DeviceAddScreen = () => {
  const [sidebar, setSidebar] = useState(1);

  const sideBar = (e) => {
    console.log(e);
    setSidebar(e);
  };

  function sideBarTest(value) {
    console.log(value);
  }

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
              Adding New Device
            </h1>
            <p className="font-poppins">
              Please follow the steps to configure your device and deploy it.
            </p>
          </div>
        </div>

        <div className="flex mt-10">
          <div className="font-medium w-1/6 text-gray-700">
            <div className="sticky top-10">
              <ul className="flex flex-col space-y-5 ">
                <i className={`cursor-pointer `}>
                  <button onClick={sideBarTest(1)}>General Information </button>{" "}
                </i>
                <i onClick={sideBarTest(2)} className={`cursor-pointer`}>
                  Meta Data
                </i>
                <i onClick={sideBarTest(3)} className={`cursor-pointer `}>
                  Device Fields
                </i>
              </ul>
            </div>
          </div>
          <div className="flex-grow space-y-16">
            <div className="border rounded-md shadow-md p-8">
              <h3 className="font-medium text-xl mb-4">General Information</h3>
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
                    Device Type
                  </label>
                  <input
                    type="text"
                    name="deviceName"
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
                    htmlFor="deviceName"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    name="deviceName"
                    placeholder="Eg.. Arduino Uno Rev3, ESP32, etc"
                    className="focus:outline-none border rounded-md py-1 px-4"
                  />
                </div>

                <div className="flex flex-col w-4/6">
                  <label
                    className="text-gray-700 font-semibold"
                    htmlFor="deviceName"
                  >
                    Description
                  </label>
                  <textarea
                    type="textarea"
                    name="deviceName"
                    placeholder="Eg.. Arduino Uno Rev3, ESP32, etc"
                    className="focus:outline-none h-[150px] border rounded-md py-1 px-4"
                  />
                </div>
              </div>
              <div className="mt-10">
                <button className="font-poppins font-bold text-gray-200 rounded-md px-10 py-1 bg-rose-900">
                  Save and Next
                </button>
              </div>
            </div>

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

export default DeviceAddScreen;
