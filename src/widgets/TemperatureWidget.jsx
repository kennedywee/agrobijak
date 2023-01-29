import { Link } from "react-router-dom";

import ThermostatRoundedIcon from "@mui/icons-material/ThermostatRounded";

const TemperatureWidget = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between">
        <div>
          <h2 className="text-xl font-normal tracking-tight text-gray-900">
            Arduino Uno | Block
          </h2>
          <p className="text-[60px] font-bold">32 °C</p>
          <h1>Temperature</h1>
        </div>

        <div className="">
          <ThermostatRoundedIcon sx={{ fontSize: 100 }} />
        </div>
      </div>
    </div>
  );
};

export default TemperatureWidget;
