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
    <div className="w-full h-full">
      <h1>
        {device.name} | {fieldValue}
      </h1>
      <div className="w-full h-full flex ">
        <ResponsiveContainer width="90%" height="90%">
          <LineChart data={data.reverse()}>
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
              stroke="#8884d8"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AgroLineChart;
