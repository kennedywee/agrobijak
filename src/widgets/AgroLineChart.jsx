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

// const data = [];
// for (let num = 20; num >= 0; num--) {
//   data.push({
//     date: subDays(new Date(), num).toISOString().substring(0, 10),
//     value: 1 + Math.random(),
//   });
// }

const AgroLineChart = ({ deviceData }) => {
  return (
    <ResponsiveContainer className="border" width="100%" height="100%">
      <LineChart
        margin={{
          top: 5,
          right: 60,
          left: 0,
          bottom: 5,
        }}
        data={deviceData}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="created"
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate() % 7 === 0) {
              return format(date, "MMM, d");
            }
            return "";
          }}
        />
        <YAxis dataKey="field1" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="field1" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AgroLineChart;
