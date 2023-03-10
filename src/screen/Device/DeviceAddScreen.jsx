import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NavbarUser from "../../components/NavbarUser";
import Footer from "../../components/Footer";

import { createDevice } from "../../actions/deviceActions";

const DeviceAddScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = "/device";

  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [type3, setType3] = useState("");
  const [type4, setType4] = useState("");
  const [type5, setType5] = useState("");

  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");
  const [field5, setField5] = useState("");

  // const [type, setType] = useState("");
  // const [name, setName] = useState(device.name);
  // const [location, setLocation] = useState(device.location);
  // const [description, setDescription] = useState(device.description);
  // const [type1, setType1] = useState(device.type_field1);
  // const [type2, setType2] = useState(device.type_field2);
  // const [type3, setType3] = useState(device.type_field3);
  // const [type4, setType4] = useState(device.type_field4);
  // const [type5, setType5] = useState(device.type_field5);

  // const [field1, setField1] = useState(device.field1);
  // const [field2, setField2] = useState(device.field2);
  // const [field3, setField3] = useState(device.field3);
  // const [field4, setField4] = useState(device.field4);
  // const [field5, setField5] = useState(device.field5);

  const deviceCreate = useSelector((state) => state.deviceCreate);
  const { error, loading, device } = deviceCreate;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createDevice({
        name: name,
        device_type: type,
        location: location,
        description: description,
        field1: field1,
        field2: field2,
        field3: field3,
        field4: field4,
        field5: field5,
        type_field1: type1,
        type_field2: type2,
        type_field3: type3,
        type_field4: type4,
        type_field5: type5,
      })
    );
    navigate(redirect);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser device />
      <div className="container">
        <Link to="/device">
          <button className="font-poppins text-rose-900 font-bold mb-5">
            ??? Back
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

        <form onSubmit={submitHandler}>
          <div className="flex mt-10">
            <div className="flex-grow space-y-16">
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
                      htmlFor="deviceName"
                    >
                      Device Type
                    </label>
                    <input
                      type="text"
                      name="deviceName"
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
                      name="deviceLocation"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
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
                      name="deviceDescription"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Eg.. Arduino Uno Rev3, ESP32, etc"
                      className="focus:outline-none h-[150px] border rounded-md py-1 px-4"
                    />
                  </div>
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
                        name="deviceType1"
                        value={type1}
                        onChange={(e) => setType1(e.target.value)}
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
                        1. Field Name
                      </label>
                      <input
                        type="text"
                        name="deviceField1"
                        value={field1}
                        onChange={(e) => setField1(e.target.value)}
                        placeholder="Eg.. Temperature, Humidity"
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
                        name="deviceType2"
                        value={type2}
                        onChange={(e) => setType2(e.target.value)}
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
                        2. Field Name
                      </label>
                      <input
                        type="text"
                        name="deviceField2"
                        value={field2}
                        onChange={(e) => setField2(e.target.value)}
                        placeholder="Eg.. Temperature, Humidity"
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
                        name="deviceType3"
                        value={type3}
                        onChange={(e) => setType3(e.target.value)}
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
                        3. Field Name
                      </label>
                      <input
                        type="text"
                        name="deviceField3"
                        value={field3}
                        onChange={(e) => setField3(e.target.value)}
                        placeholder="Eg.. Temperature, Humidity"
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
                        name="deviceType4"
                        value={type4}
                        onChange={(e) => setType4(e.target.value)}
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
                        4. Field Name
                      </label>
                      <input
                        type="text"
                        name="deviceField4"
                        value={field4}
                        onChange={(e) => setField4(e.target.value)}
                        placeholder="Eg.. Temperature, Humidity"
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
                        name="deviceType4"
                        value={type5}
                        onChange={(e) => setType5(e.target.value)}
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
                        5. Field Name
                      </label>
                      <input
                        type="text"
                        name="deviceField5"
                        value={field5}
                        onChange={(e) => setField5(e.target.value)}
                        placeholder="Eg.. Temperature, Humidity"
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
        </form>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default DeviceAddScreen;
