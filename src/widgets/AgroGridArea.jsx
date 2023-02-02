import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import CloseIcon from "@mui/icons-material/Close";

import React, { useState, useEffect } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
const AgroGridPro = WidthProvider(RGL);

import AgroGauge from "./AgroGauge";
import AgroIndicator from "./AgroIndicator";
import AgroLineChart from "./AgroLineChart";
import AgroPercentage from "./AgroPercentage";
import AgroSwitch from "./AgroSwitch";

import { useDispatch, useSelector } from "react-redux";
import { updateWidget, deleteWidget } from "../actions/widgetActions";

const AgroGridArea = ({ widgets, devices, data }) => {
  const dispatch = useDispatch();

  const [layout, setLayout] = useState([]);

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

  const handleRemove = (i) => {
    console.log(i);
    setLayout(layout.filter((item) => item.i !== i));
    dispatch(deleteWidget(i));
    window.location.reload();
  };

  const generateDOM = () =>
    _.map(widgets, (widget) => {
      const Component = components[widget.type] || "span";

      return (
        <div className="border bg-white" key={widget.i} data-grid={widget}>
          <div className="h-full w-full bg-white flex flex-col select-none">
            <div className="flex justify-between">
              <span className="dragHandler cursor-grab">
                <BlurOnIcon />
              </span>
              <span
                onClick={() => handleRemove(widget.i)}
                className="cursor-pointer"
              >
                <CloseIcon />
              </span>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
              <Component widget={widget} devices={devices} dData={data} />
            </div>
            <div className="flex justify-center">
              <h1>
                {widget.device_name} | {widget.field_name}
              </h1>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div>
      <AgroGridPro
        className="layout"
        cols={12}
        rowHeight={30}
        onLayoutChange={onLayoutChangeHandler}
        layout={layout}
        draggableHandle={".dragHandler"}
      >
        {generateDOM()}
      </AgroGridPro>
    </div>
  );
};

export default AgroGridArea;
