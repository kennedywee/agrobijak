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
    <div className="w-full  flex justify-center items-center">
      <div className="">
        <Switch
          checked={enabled}
          onChange={handleChange}
          className={`${enabled ? "bg-teal-700" : "bg-red-700"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    </div>
  );
};

export default AgroSwitch;
