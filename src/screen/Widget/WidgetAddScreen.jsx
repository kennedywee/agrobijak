import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { createWidget } from "../../actions/widgetActions";

import NavbarUser from "../../components/NavbarUser";
import Footer from "../../components/Footer";
import AlertSidebar from "../../components/AlertSidebar";
import UAWrapper from "../../components/UAWrapper";
import UAWrapperContent from "../../components/UAWrapperContent";

const WidgetAddScreen = () => {
  const id = useParams();
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const [type, setType] = useState("");
  const [device, setDevice] = useState("");
  const [field, setField] = useState("");

  const [fieldList, setFieldList] = useState([]);

  const devices = JSON.parse(localStorage.getItem("myDevice"));

  const uniqueDevices = [
    ...new Set(devices.map((item) => ({ id: item.id, name: item.name }))),
  ];

  const onChangeDeviceHandler = (e) => {
    setDevice(e.target.value);
    const selected = parseInt(e.target.value);
    autoFillDevice(selected);
  };

  const autoFillDevice = (selected) => {
    const deviceID = Number(selected);
    let selectedDevice = devices.find((device) => device.id === deviceID);

    setFieldList(
      [0, 1, 2, 3, 4].map((index) => ({
        fieldKey: Object.keys(selectedDevice).slice(5, 10)[index],
        fieldValue: Object.values(selectedDevice).slice(5, 10)[index],
      }))
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      createWidget({
        type: type,
        device: device,
        field: field,
      })
    );
    navigator("/dashboard");
  };

  console.log(type);

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser dashboard />
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
              Adding New Alert
            </h1>
            <p className="font-poppins">
              Please follow the steps to configure your alert and deploy it.
            </p>
          </div>
        </div>

        <div className="flex mt-10">
          <div className="font-medium w-1/6 text-gray-700">
            <div className="sticky top-10">
              <AlertSidebar id={id} general />
            </div>
          </div>
          <div className="flex-grow ">
            <form className="space-y-10" onSubmit={submitHandler}>
              <UAWrapper
                title="Widget Type"
                description="Ensure that you input the right types and a distinct name to identify your device in the device list section."
              >
                <UAWrapperContent>
                  <label className="text-gray-700 font-semibold" htmlFor="type">
                    Widget Type
                  </label>
                  <select
                    type="text"
                    name="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="focus:outline-none border rounded-md py-1 px-4"
                  >
                    <option value="linechart">Line Chart</option>
                    <option value="gauge">Gauge Chart</option>
                    <option value="switch">Switch Control</option>
                    <option value="indicator">Indicator Chart</option>
                    <option value="percentage">Percentage Chart</option>
                  </select>
                </UAWrapperContent>
              </UAWrapper>

              <UAWrapper
                title="Target Device"
                description="Ensure that you input the right types and a distinct name to identify your device in the device list section."
              >
                <UAWrapperContent>
                  <label
                    className="text-gray-700 font-semibold"
                    htmlFor="device"
                  >
                    Target Device
                  </label>
                  <select
                    type="text"
                    name="device"
                    value={device}
                    onChange={onChangeDeviceHandler}
                    className="focus:outline-none border rounded-md py-1 px-4"
                  >
                    {uniqueDevices.map((device) => (
                      <option key={device.id} value={device.id}>
                        {device.name}
                      </option>
                    ))}
                  </select>
                </UAWrapperContent>

                <UAWrapperContent>
                  <label
                    className="text-gray-700 font-semibold"
                    htmlFor="field"
                  >
                    Target Field
                  </label>
                  <select
                    type="text"
                    name="field"
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                    className="focus:outline-none border rounded-md py-1 px-4"
                  >
                    {fieldList.map((field) => (
                      <option key={field.fieldKey} value={field.fieldKey}>
                        {field.fieldKey} | {field.fieldValue}
                      </option>
                    ))}
                  </select>
                </UAWrapperContent>
              </UAWrapper>

              <UAWrapper
                title="Save Widget"
                description="Ensure that all details are correct!"
                borderColor="yellow"
              >
                <UAWrapperContent>
                  <button
                    type="submit"
                    className="font-bold text-gray-200 rounded-md px-5 py-1 bg-rose-900"
                  >
                    Save Widget
                  </button>
                </UAWrapperContent>
              </UAWrapper>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default WidgetAddScreen;
