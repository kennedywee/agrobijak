import { Link, useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDevice, listDeviceDetails } from "../actions/deviceActions";

import NavbarUser from "../components/NavbarUser";
import Footer from "../components/Footer";
import DeviceSidebar from "../components/DeviceSidebar";

const DeviceEditFieldScreen = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  const [enabled, setEnabled] = useState(false);
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

  const deviceDetails = useSelector((state) => state.deviceDetails);
  const { device } = deviceDetails;

  useEffect(() => {
    if (!device) {
      dispatch(listDeviceDetails(id));
    } else {
      setType1(device.type_field1);
      setType2(device.type_field2);
      setType3(device.type_field3);
      setType4(device.type_field4);
      setType5(device.type_field5);

      setField1(device.field1);
      setField2(device.field2);
      setField3(device.field3);
      setField4(device.field4);
      setField5(device.field5);
    }
  }, [dispatch, id]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateDevice({
        id: id,
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

              <form onSubmit={submitHandler}>
                <div className="flex space-x-10 mt-4">
                  <div className="flex flex-col w-2/6">
                    <label
                      className="text-gray-700 font-semibold"
                      htmlFor="deviceName"
                    >
                      1. Field Type {type1}
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
                      1. Field Name {field1}
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
                      2. Field Type {type2}
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
                      htmlFor="deviceField3"
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
              </form>
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
