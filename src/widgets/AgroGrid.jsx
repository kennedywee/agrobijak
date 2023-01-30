import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import React, { useState } from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
const AgroGridPro = WidthProvider(RGL);

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  const [newType, setNewType] = useState("");
  const [newDevice, setNewDevice] = useState("");
  const [newField, setNewField] = useState([]);

  const [fieldList, setFieldList] = useState([]);

  const [layout, setLayout] = useState([]);

  const widgetList = useSelector((state) => state.widgetList);
  const { widgets } = widgetList;

  const deviceList = useSelector((state) => state.deviceList);
  const { devices } = deviceList;

  const dashboardDataList = useSelector((state) => state.dashboardData);
  const { data } = dashboardDataList;

  const uniqueDevices = [
    ...new Set(devices.map((item) => ({ id: item.id, name: item.name }))),
  ];

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

  const onAddItem = () => {
    window.location.reload(true);
  };

  const handleDeviceSelect = (e) => {
    setNewDevice(e.target.value);

    const value = parseInt(e.target.value);
    const selectedDevice = devices.find((device) => device.id === value);

    if (selectedDevice) {
      setFieldList([
        selectedDevice.field1,
        selectedDevice.field2,
        selectedDevice.field3,
        selectedDevice.field4,
        selectedDevice.field5,
      ]);
    }
  };

  console.log(fieldList);

  const generateDOM = () =>
    _.map(widgets, (widget) => {
      const Component = components[widget.type] || "span";
      return (
        <div className="border bg-white" key={widget.i} data-grid={widget}>
          {typeof Component === "string" ? (
            <div>
              <span>Create New Widget</span>
              <div>
                <label className="block text-gray-700">Chart Types</label>
                <select
                  type="name"
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-rose-900 focus:bg-white focus:outline-none"
                  required
                >
                  <option value="linechart">Line Chart</option>
                  <option value="gauge">Gauge Chart</option>
                  <option value="switch">Switch Control</option>
                  <option value="indicator">Indicator Chart</option>
                  <option value="percentage">Percentage Chart</option>
                </select>

                <label className="block text-gray-700">Select a Device</label>
                <select
                  type="text"
                  value={newDevice}
                  onChange={handleDeviceSelect}
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-rose-900 focus:bg-white focus:outline-none"
                  required
                >
                  {uniqueDevices.map((device) => (
                    <option key={device.id} value={device.id}>
                      {device.name}
                    </option>
                  ))}
                </select>

                <label className="block text-gray-700">Select a Field</label>
                <select
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 mt-2 border focus:border-rose-900 focus:bg-white focus:outline-none"
                  required
                  value={newField}
                  onChange={(e) => setNewField(e.target.value)}
                  disabled={!fieldList.length}
                >
                  {fieldList.map((field) => (
                    <option key={field} value={field}>
                      {field}
                    </option>
                  ))}
                </select>
              </div>
            </div>
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
      <button className="border" onClick={onAddItem}>
        Add New Item
      </button>
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
