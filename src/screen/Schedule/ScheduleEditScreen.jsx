import { useNavigate, useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import _ from "lodash";

import {
  updateSchedule,
  listScheduleDetails,
  deleteSchedule,
} from "../../actions/scheduleActions";

import NavbarUser from "../../components/NavbarUser";
import Footer from "../../components/Footer";
import AlertSidebar from "../../components/AlertSidebar";
import UAWrapper from "../../components/UAWrapper";
import UAWrapperContent from "../../components/UAWrapperContent";
import { SCHEDULE_UPDATE_RESET } from "../../constants/scheduleConstants";

const ScheduleEditScreen = () => {
  let { id } = useParams();
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [device, setDevice] = useState("");
  const [field, setField] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [duration, setDuration] = useState("");

  const [fieldList, setFieldList] = useState([]);

  const devices = JSON.parse(localStorage.getItem("myDevice"));

  const scheduleDetails = useSelector((state) => state.scheduleDetails);
  const { schedule } = scheduleDetails;

  const scheduleUpdate = useSelector((state) => state.scheduleUpdate);
  const { success } = scheduleUpdate;

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
    console.log(schedule);
    if (success) {
      dispatch({ type: SCHEDULE_UPDATE_RESET });
      navigator("/schedule");
    } else {
      if (!schedule.name || schedule.id !== Number(id)) {
        dispatch(listScheduleDetails(id));
      } else {
        setName(schedule.name);
        setDevice(schedule.device);
        setField(schedule.field);
        setDateTime(schedule.datetime);
        setDuration(schedule.duration);

        //autoFillDevice(alert.device);
      }
    }
  }, [dispatch, schedule, id, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateSchedule({
        id: id,
        name: name,
        device: device,
        field: field,
        datetime: dateTime,
        duration: duration,
      })
    );
  };

  const deleteHandler = (id) => {
    dispatch(deleteAlert(id));
    navigator("/alert");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarUser schedule />
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
          <div className="flex-grow ">
            <form className="space-y-10" onSubmit={submitHandler}>
              <UAWrapper
                title="General Information"
                description="Ensure that you input the right types and a distinct name to identify your device in the device list section."
              >
                <UAWrapperContent>
                  <label className="text-gray-700 font-semibold" htmlFor="name">
                    Schedule Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your schedule name"
                    className="focus:outline-none border rounded-md py-1 px-4"
                  />
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
                title="Schedule Time"
                description="Ensure that you input the right types and a distinct name to identify your device in the device list section."
              >
                <UAWrapperContent>
                  <label className="text-gray-700 font-semibold" htmlFor="name">
                    Trigger Date Time
                  </label>
                  <input
                    type="datetime-local"
                    name="name"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    placeholder="Enter your schedule name"
                    className="focus:outline-none border rounded-md py-1 px-4"
                  />
                </UAWrapperContent>

                <UAWrapperContent>
                  <label
                    className="text-gray-700 font-semibold"
                    htmlFor="field"
                  >
                    Duration (Time Delta)
                  </label>
                  <input
                    type="text"
                    name="field"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="Example: 00:00:05 for 5 seconds"
                    className="focus:outline-none border rounded-md py-1 px-4"
                  ></input>
                </UAWrapperContent>
              </UAWrapper>

              <UAWrapper
                title="Save Schedule"
                description="Ensure that all details are correct!"
                borderColor="yellow"
              >
                <UAWrapperContent>
                  <button
                    type="submit"
                    className="font-bold text-gray-200 rounded-md px-5 py-1 bg-rose-900"
                  >
                    Save Schedule
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

export default ScheduleEditScreen;
