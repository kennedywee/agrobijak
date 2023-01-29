import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useEffect } from "react";
import { listDeviceDetails } from "../actions/deviceActions";
import { listData } from "../actions/dataActions";
import { useDispatch, useSelector } from "react-redux";

const percentage = 30;

const AgroPercentage = ({ widget }) => {
  const id = widget.device;
  const dispatch = useDispatch();

  const fieldStr = widget.datafield;

  const deviceDetails = useSelector((state) => state.deviceDetails);
  const { device } = deviceDetails;

  const dataList = useSelector((state) => state.dataList);
  const { data } = dataList;

  const fieldValue = device[fieldStr];

  const percentage = 60;
  useEffect(() => {
    dispatch(listDeviceDetails(id));
    dispatch(listData(id));
  }, [dispatch, id]);

  return (
    <div className="h-full w-full">
      <h1>
        {device.name} | {fieldValue}
      </h1>
      <div className="h-full w-full flex justify-center text-center">
        <div className="flex justify-center items-center w-[8rem]">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
      </div>
    </div>
  );
};

export default AgroPercentage;
