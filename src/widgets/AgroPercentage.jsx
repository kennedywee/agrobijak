import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useDispatch } from "react-redux";
import { deleteWidget } from "../actions/widgetActions";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const AgroPercentage = ({ widget, devices, dData }) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const id = widget.device;
  const device = devices.find((e) => e.id === id);

  const widgetDelete = useSelector((state) => state.widgetDelete);
  const { success } = widgetDelete;

  if (!device) {
    console.error("Device not found");
    return;
  }

  const fieldStr = widget.datafield;
  const fieldValue = device[fieldStr];

  let data = dData.filter(function (entry) {
    return entry.device === id;
  });

  if (data.length === 0) {
    console.error("Data not found for device");
    return;
  }

  const singleData = data[0];

  const value = singleData[fieldStr];

  const deleteHandler = (id) => {
    dispatch(deleteWidget(id));
  };

  // useEffect(() => {
  //   if (success) {
  //     navigator("dashboard/");
  //   }
  // }, [dispatch]);

  return (
    <div className="h-full w-full py-2 px-3">
      <h1 onClick={() => console.log("click")}>
        {device.name} | {fieldValue}
      </h1>

      <div></div>
      <div className="h-full w-full flex justify-center text-center">
        <div className="flex justify-center items-center w-[8rem] top-0">
          <CircularProgressbar value={value} text={`${value}%`} />
        </div>
      </div>
    </div>
  );
};

export default AgroPercentage;
