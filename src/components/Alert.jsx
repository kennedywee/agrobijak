import { Link } from "react-router-dom";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

import devices from "../mockdata/devices.json";

const Alert = ({ alert }) => {
  const devices = JSON.parse(localStorage.getItem("myDevice"));
  const device = devices.find((device) => device.id === alert.device);
  const name = JSON.parse(localStorage.getItem("userInfo")).name;

  if (!device) {
    console.error("Device not found aiyaa!");
  }

  const fieldName = device.field1;

  return (
    <div>
      <Link to={`/alert/${alert.id}`}>
        <div className="flex items-center justify-between">
          <div className="flex">
            <NotificationsActiveIcon className="mr-2" sx={{ fontSize: 50 }} />
            <div>
              <h3 className="font-poppins font-medium text-lg">{alert.name}</h3>
              <h4 className="font-poppins font-normal font-base">
                {device.name} | {fieldName}
              </h4>
            </div>
          </div>

          <div>
            <PowerSettingsNewIcon
              className={alert.active ? "text-green-600" : "text-red-600"}
              sx={{ fontSize: 50 }}
            />
          </div>
        </div>

        <p className="font-poppins text-sm text-gray-700 py-2 w-80">
          Notify {name} when <br />
          <span className="font-semibold">
            {device.name} | {fieldName}
          </span>
          <br />
          contains of the value {alert.condition_value}
        </p>

        <p className="font-poppins text-sm text-gray-500 pt-3">
          Frequency: {alert.frequency ? "Each-Time" : "Once"}
        </p>
      </Link>
    </div>
  );
};

export default Alert;
