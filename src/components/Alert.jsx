import { Link } from "react-router-dom";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Alert = () => {
  return (
    <div className="col-span-1 border p-5 rounded-lg cursor-pointer hover:shadow-lg">
      <Link to={`/alert/1`}>
        <div className="flex items-center justify-between">
          <div className="flex">
            <NotificationsActiveIcon className="mr-2" sx={{ fontSize: 50 }} />
            <div>
              <h3 className="font-poppins font-medium text-lg">
                Raining During Pump
              </h3>
              <h4 className="font-poppins font-normal font-base">
                Arduino Uno Rev3
              </h4>
            </div>
          </div>

          <div>
            <PowerSettingsNewIcon
              className={1 > 0 ? "text-green-600" : "text-red-600"}
              sx={{ fontSize: 50 }}
            />
          </div>
        </div>

        <p className="font-poppins text-sm text-gray-700 py-2 w-80">
          Notify Kennedy Wee when <br />{" "}
          <span className="font-semibold">Arduino Uno Rev3 | Rain Sensor</span>
          <br />
          consists of the value 35
        </p>

        <p className="font-poppins text-sm text-gray-500 pt-3">
          Frequency: One-Time
        </p>
      </Link>
    </div>
  );
};

export default Alert;
