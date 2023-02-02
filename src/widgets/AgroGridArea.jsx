import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

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
          <div className="h-full w-full">
            <div className="flex justify-between">
              <div className="dragHandle cursor-move">
                <OpenWithIcon />
              </div>
              <button onClick={() => handleRemove(widget.i)}>
                <CancelOutlinedIcon />
              </button>
            </div>

            <Component widget={widget} devices={devices} dData={data} />
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
        draggableHandle={".dragHandle"}
      >
        {generateDOM()}
      </AgroGridPro>
    </div>
  );
};

export default AgroGridArea;
