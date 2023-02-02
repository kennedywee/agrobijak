import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import moment from "moment/moment";

import { useEffect } from "react";

const AgroLineChart = ({ widget, devices, dData }) => {
  const id = widget.device;
  const device = devices.find((e) => e.id === id);

  if (!device) {
    console.error("Device not found");
    return;
  }

  const fieldStr = widget.datafield;
  const fieldValue = device[fieldStr];

  let data = dData.filter(function (entry) {
    return entry.device === id;
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        margin={{ top: 5, right: 50, left: 0, bottom: 5 }}
        data={data.reverse().slice(0, 10)}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="created"
          tickFormatter={(str) => {
            const date = moment(str);
            return date.format("MM/DD/YY");
          }}
        />
        <YAxis dataKey="field2" />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="field2"
          strokeWidth={3}
          stroke="#134e4a"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AgroLineChart;
