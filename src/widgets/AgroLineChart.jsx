import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { format, parseISO, subDays } from "date-fns";

import moment from "moment/moment";

import { useEffect } from "react";
import { listDeviceDetails } from "../actions/deviceActions";
import { listData } from "../actions/dataActions";
import { useDispatch, useSelector } from "react-redux";

// const data = [];
// for (let num = 20; num >= 0; num--) {
//   data.push({
//     date: subDays(new Date(), num).toISOString().substring(0, 10),
//     value: 1 + Math.random(),
//   });
// }

const AgroLineChart = ({ widget }) => {
  const id = widget.device;
  const dispatch = useDispatch();

  const fieldStr = widget.datafield;

  const deviceDetails = useSelector((state) => state.deviceDetails);
  const { device } = deviceDetails;

  const dataList = useSelector((state) => state.dataList);
  const { data } = dataList;

  let reversedData = data.reverse();

  console.log(reversedData);

  useEffect(() => {
    dispatch(listDeviceDetails(id));
    dispatch(listData(id));
  }, [dispatch, id]);

  return (
    <div className="w-full h-full">
      <h1>{device.name}</h1>
      <div className="w-full h-full flex ">
        <ResponsiveContainer width="90%" height="90%">
          <LineChart data={data.reverse()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="created"
              tickFormatter={(str) => {
                console.log(typeof str);
                const date = moment(str);
                return date.format("MM/DD/YY");
              }}
            />
            <YAxis dataKey={fieldStr} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={fieldStr} stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AgroLineChart;
