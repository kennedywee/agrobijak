import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import React, { useState } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
const AgroGridPro = WidthProvider(RGL);

import AgroGauge from "./AgroGauge";
import AgroIndicator from "./AgroIndicator";
import AgroLineChart from "./AgroLineChart";
import AgroPercentage from "./AgroPercentage";
import AgroSwitch from "./AgroSwitch";
import AgroTemp from "./AgroTemp";

import widgets from "../constants/widgets.json";
import data from "../constants/data.json";

const AgroGrid = ({
  className = "layout",
  cols = 12,
  rowHeight = 30,
  onLayoutChange,
  isBounded = true,
}) => {
  const [layout, setLayout] = useState([]);

  const resetLayout = () => {
    setLayout([]);
  };

  const onLayoutChangeHandler = (newLayout) => {
    setLayout(newLayout);
    console.log(newLayout);
  };

  const generateDOM = () =>
    _.map(widgets, (widget) => {
      switch (widget.type) {
        case "temperature":
          return (
            <div className="border bg-white" key={widget.i} data-grid={widget}>
              <div className="flex justify-center">
                <h2>Arduino Uno | Light A</h2>
              </div>
              <AgroIndicator />
            </div>
          );
        case "linechart":
          return (
            <div className="border bg-white" key={widget.i} data-grid={widget}>
              <AgroLineChart widget={widget} deviceData={data} />
            </div>
          );
        case "gauge":
          return (
            <div className="border bg-white" key={widget.i} data-grid={widget}>
              <div className="flex justify-center">
                <h2>Arduino Uno | Light A</h2>
              </div>
              <AgroLineChart deviceData={data} />
            </div>
          );
        default:
          return (
            <div className="border bg-white" key={widget.i} data-grid={widget}>
              <span>Something</span>
            </div>
          );
      }
    });
  return (
    <div>
      <button onClick={resetLayout}>Reset Layout</button>
      <AgroGridPro
        className={className}
        cols={cols}
        rowHeight={rowHeight}
        onLayoutChange={onLayoutChangeHandler}
        isBounded={isBounded}
        layout={layout}
      >
        {generateDOM()}
      </AgroGridPro>
    </div>
  );
};

export default AgroGrid;
