import { useLocation, useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  updateAlert,
  listAlertDetails,
  deleteAlert,
} from "../../actions/alertActions";

import NavbarUser from "../../components/NavbarUser";
import Footer from "../../components/Footer";
import AlertSidebar from "../../components/AlertSidebar";
import UAWrapper from "../../components/UAWrapper";
import UAWrapperContent from "../../components/UAWrapperContent";
import { ALERT_UPDATE_RESET } from "../../constants/alertConstants";

const AlertEditScreen = () => {
  let { id } = useParams();
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [device, setDevice] = useState("");
  const [field, setField] = useState("");
  const [conditionValue, setConditionValue] = useState("");
  const [message, setMessage] = useState("");
  const [frequency, setFrequency] = useState(false);
  const [active, setActive] = useState("");
  const [fieldList, setFieldList] = useState([]);

  const devices = JSON.parse(localStorage.getItem("myDevice"));

  const alertDetails = useSelector((state) => state.alertDetails);
  const { alert } = alertDetails;

  const alertUpdate = useSelector((state) => state.alertUpdate);
  const { success } = alertUpdate;

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

  useEffect(() => {
    console.log(success);
    if (success) {
      dispatch({ type: ALERT_UPDATE_RESET });
      navigator("/alert");
      console.log("here");
    } else {
      if (!alert.name || alert.id !== Number(id)) {
        dispatch(listAlertDetails(id));
      } else {
        setName(alert.name);
        setDevice(alert.device);
        setField(alert.field);
        setConditionValue(alert.condition_value);
        setMessage(alert.message);
        setFrequency(alert.frequency);
        setActive(alert.active);

        autoFillDevice(alert.device);
      }
    }
  }, [dispatch, alert, id, success, device]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(device);
    console.log(field);
    dispatch(
      updateAlert({
        id: id,
        name: name,
        device: device,
        field: field,
        condition_value: conditionValue,
        message: message,
        frequency: frequency,
        active: active,
      })
    );
  };

  const deleteHandler = (id) => {
    dispatch(deleteAlert(id));
    navigator("/alert");
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
                    Save Changes
                  </button>
                </UAWrapperContent>
              </UAWrapper>
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
