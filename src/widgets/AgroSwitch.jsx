import { useState, useCallback } from "react";
import { Switch } from "@headlessui/react";

import { useDispatch } from "react-redux";
import { createData } from "../actions/dataActions";

const AgroSwitch = ({ widget, devices, dData }) => {
  const dispatch = useDispatch();
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

  if (data.length === 0) {
    console.error("Data not found for device");
    return;
  }

  const singleData = data[0];
  let field = singleData[fieldStr];

  const [enabled, setEnabled] = useState(field === 1 ? true : false);

  const handleChange = useCallback(() => {
    setEnabled(!enabled);
    console.log(!enabled);
    dispatch(
      createData({
        device: device,
        fieldStr: fieldStr,
        fieldValue: !enabled,
      })
    );
  });

  return (
    <div className="w-full h-full">
      <h1>
        {device.name} | {fieldValue}
      </h1>
      <div className="w-full h-full flex justify-center items-center">
        <Switch
          checked={enabled}
          onChange={handleChange}
          className={`${
            enabled ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-10 w-20 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              enabled ? "translate-x-10" : "translate-x-1"
            } inline-block h-10 w-10 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div>
    </div>
  );
};

export default AgroSwitch;
