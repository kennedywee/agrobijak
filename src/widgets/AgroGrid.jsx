import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import React, { useState } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
const AgroGridPro = WidthProvider(RGL);

import { useEffect } from "react";

import { listDevices } from "../actions/deviceActions";
import { dashboardData } from "../actions/dataActions";
import { useDispatch, useSelector } from "react-redux";

import AgroGauge from "./AgroGauge";
import AgroIndicator from "./AgroIndicator";
import AgroLineChart from "./AgroLineChart";
import AgroPercentage from "./AgroPercentage";
import AgroSwitch from "./AgroSwitch";
import AgroTemp from "./AgroTemp";

import widgets from "../constants/widgets.json";

const AgroGrid = ({
  className = "layout",
  cols = 12,
  rowHeight = 30,
  onLayoutChange,
  isBounded = true,
}) => {
  const dispatch = useDispatch();
  const [layout, setLayout] = useState([]);

  const deviceList = useSelector((state) => state.deviceList);
  const { devices } = deviceList;

  const dashboardDataList = useSelector((state) => state.dashboardData);
  const { data } = dashboardDataList;

  const resetLayout = () => {
    setLayout([]);
  };

  const onLayoutChangeHandler = (newLayout) => {
    setLayout(newLayout);
    console.log(newLayout);
  };

  const components = {
    linechart: AgroLineChart,
    gauge: AgroGauge,
    indicator: AgroIndicator,
    switch: AgroSwitch,
    percentage: AgroPercentage,
  };

  const generateDOM = () =>
    _.map(widgets, (widget) => {
      const Component = components[widget.type] || "span";
      return (
        <div className="border bg-white" key={widget.i} data-grid={widget}>
          {typeof Component === "string" ? (
            <span>Something</span>
          ) : (
            <Component widget={widget} devices={devices} dData={data} />
          )}
        </div>
      );
    });

  useEffect(() => {
    dispatch(listDevices());
    dispatch(dashboardData());
  }, [dispatch]);

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
