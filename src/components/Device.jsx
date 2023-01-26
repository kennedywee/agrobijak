import { Link } from "react-router-dom";

import DeviceHubRoundedIcon from "@mui/icons-material/DeviceHubRounded";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Device = ({ device }) => {
  return (
    <div>
      <Link to={`/device/${device.id}`}>
        <div className="flex items-center justify-between">
          <div className="flex">
            <DeviceHubRoundedIcon className="mr-2" sx={{ fontSize: 50 }} />
            <div>
              <h3 className="font-poppins font-medium text-lg">
                {device.name}
              </h3>
              <h4 className="font-poppins font-normal font-base">
                {device.location}
              </h4>
            </div>
          </div>

          <div>
            <PowerSettingsNewIcon
              className={device.active > 0 ? "text-green-600" : "text-red-600"}
              sx={{ fontSize: 50 }}
            />
          </div>
        </div>

        <p className="font-poppins text-sm text-gray-700 py-2 w-80">
          {device.description}
        </p>

        <p className="font-poppins text-sm text-gray-500">
          Last updated: {device.updated}
        </p>
      </Link>
    </div>
  );
};

export default Device;
