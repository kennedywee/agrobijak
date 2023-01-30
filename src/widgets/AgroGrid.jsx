import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import React, { useState } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
const AgroGridPro = WidthProvider(RGL);

import { useEffect } from "react";

import { listDevices } from "../actions/deviceActions";
import { dashboardData } from "../actions/dataActions";
import { listWidgets, updateWidget } from "../actions/widgetActions";
import { useDispatch, useSelector } from "react-redux";

import AgroGauge from "./AgroGauge";
import AgroIndicator from "./AgroIndicator";
import AgroLineChart from "./AgroLineChart";
import AgroPercentage from "./AgroPercentage";
import AgroSwitch from "./AgroSwitch";
import AgroTemp from "./AgroTemp";

const AgroGrid = ({
  className = "layout",
  cols = 12,
  rowHeight = 30,
  onLayoutChange,
  isBounded = true,
}) => {
  const dispatch = useDispatch();
  const [layout, setLayout] = useState([]);

  const widgetList = useSelector((state) => state.widgetList);
  const { widgets } = widgetList;

  const deviceList = useSelector((state) => state.deviceList);
  const { devices } = deviceList;

  const dashboardDataList = useSelector((state) => state.dashboardData);
  const { data } = dashboardDataList;

  const resetLayout = () => {
    setLayout([]);
  };

  const onLayoutChangeHandler = (newLayout) => {
    setLayout(newLayout);
    if (layout) {
      _.map(layout, (item) => {
        console.log(item);
        dispatch(updateWidget(item));
      });
    }
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
    dispatch(listWidgets());
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
