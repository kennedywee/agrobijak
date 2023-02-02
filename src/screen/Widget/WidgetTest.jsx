import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import BlurOnIcon from "@mui/icons-material/BlurOn";
import CloseIcon from "@mui/icons-material/Close";

import { Switch } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
const AgroGridPro = WidthProvider(RGL);

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

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const WidgetTest = () => {
  const [layout, setLayout] = useState([]);
  const [enabled, setEnabled] = useState(false);

  const onLayoutChange = (layout) => {
    setLayout(layout);
  };
  return (
    <div>
      {/* <AgroGridPro
        className="layout"
        onLayoutChange={onLayoutChange}
        rowHeight={30}
        draggableHandle={".dragHandler"}
      >
        <div
          className="bg-white border"
          key="1"
          data-grid={{ x: 0, y: 0, w: 2, h: 3 }}
        >
          <div className="h-full w-full bg-gray-200 flex flex-col">
            <div className="flex justify-between p-2">
              <span className="dragHandler">Drag</span>
              <h1>Delete</h1>
            </div>
            <div className="flex-1 p-2 flex flex-col justify-center items-center">
              <div>Widget Content</div>
            </div>
            <div className="p-2 text-center">
              <h1>Device Name</h1>
            </div>
          </div>
        </div>
      </AgroGridPro> */}

      <AgroGridPro
        className="layout"
        onLayoutChange={onLayoutChange}
        rowHeight={30}
        draggableHandle={".dragHandler"}
      >
        <div
          className="bg-white border"
          key="1"
          data-grid={{ x: 0, y: 0, w: 2, h: 3 }}
        >
          <div className="h-full w-full bg-white flex flex-col select-none">
            <div className="flex justify-between">
              <span className="dragHandler cursor-grab">
                <BlurOnIcon />
              </span>
              <span className="cursor-grab">
                <CloseIcon />
              </span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center">
              <h1>ESP32 Control | Pump</h1>
            </div>
          </div>
        </div>
      </AgroGridPro>
    </div>
  );
};

export default WidgetTest;
