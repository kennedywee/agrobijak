import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { createAlert } from "../../actions/alertActions";

import NavbarUser from "../../components/NavbarUser";
import Footer from "../../components/Footer";
import AlertSidebar from "../../components/AlertSidebar";
import UAWrapper from "../../components/UAWrapper";
import UAWrapperContent from "../../components/UAWrapperContent";

const AlertAddScreen = () => {
  const id = useParams();
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const [fieldList, setFieldList] = useState([]);

  const [name, setName] = useState("");
  const [device, setDevice] = useState("");
  const [field, setField] = useState("");
  const [conditionValue, setConditionValue] = useState("");
  const [message, setMessage] = useState("");
  const [frequency, setFrequency] = useState(false);

  const devices = JSON.parse(localStorage.getItem("myDevice"));

  const uniqueDevices = [
    ...new Set(devices.map((item) => ({ id: item.id, name: item.name }))),
  ];

  const onChangeDeviceHandler = (e) => {
    setDevice(e.target.value);
    const selected = parseInt(e.target.value);
    let selectedDevice = devices.find((device) => device.id === selected);

    let keys = Object.keys(selectedDevice).slice(5, 10);
    let values = Object.values(selectedDevice).slice(5, 10);

    setFieldList([
      {
        fieldKey: keys[0],
        fieldValue: values[0],
      },
      {
        fieldKey: keys[1],
        fieldValue: values[1],
      },
      {
        fieldKey: keys[2],
        fieldValue: values[2],
      },
      {
        fieldKey: keys[3],
        fieldValue: values[3],
      },
      {
        fieldKey: keys[4],
        fieldValue: values[4],
      },
    ]);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      createAlert({
        name: name,
        device: device,
        condition_value: conditionValue,
        message: message,
        frequency: frequency,
        field: field,
      })
    );
    navigate("/alert");
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
                title="General Information"
                description="Ensure that you input the right types and a distinct name to identify your device in the device list section."
              >
                <UAWrapperContent>
                  <label className="text-gray-700 font-semibold" htmlFor="name">
                    Alert Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your alert name"
                    className="focus:outline-none border rounded-md py-1 px-4"
                  />
                </UAWrapperContent>
              </UAWrapper>

              <UAWrapper
                title="Condition Check"
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

                <UAWrapperContent>
                  <label
                    className="text-gray-700 font-semibold"
                    htmlFor="field"
                  >
                    Condition Value (String)
                  </label>
                  <input
                    type="text"
                    name="field"
                    value={conditionValue}
                    onChange={(e) => setConditionValue(e.target.value)}
                    placeholder="Consists the value of.."
                    className="focus:outline-none border rounded-md py-1 px-4"
                  ></input>
                </UAWrapperContent>
              </UAWrapper>

              <UAWrapper
                title="Alert Type and Message"
                description="Ensure that you input the right types and a distinct name to identify your device in the device list section."
              >
                <UAWrapperContent>
                  <label
                    className="text-gray-700 font-semibold"
                    htmlFor="frequency"
                  >
                    Alert Frequency
                  </label>

                  <select
                    type="text"
                    name="frequency"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="focus:outline-none border rounded-md py-1 px-4"
                  >
                    <option value="false">Once</option>
                    <option value="true">Each Time</option>
                  </select>

                  <label
                    className="text-gray-700 font-semibold"
                    htmlFor="message"
                  >
                    Message Content
                  </label>
                  <textarea
                    type="textarea"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Eg.. Arduino Uno Rev3, ESP32, etc"
                    className="focus:outline-none h-[150px] border rounded-md py-1 px-4"
                  />
                </UAWrapperContent>
              </UAWrapper>

              <UAWrapper
                title="Save Alert"
                description="Ensure that all details are correct!"
                borderColor="yellow"
              >
                <UAWrapperContent>
                  <button
                    type="submit"
                    className="font-bold text-gray-200 rounded-md px-5 py-1 bg-rose-900"
                  >
                    Save Alert
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

export default AlertAddScreen;
