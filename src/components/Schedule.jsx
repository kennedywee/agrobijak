import { Link } from "react-router-dom";

import TodayIcon from "@mui/icons-material/Today";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

import DateTime from "../components/DateTime";

const Schedule = ({ schedule }) => {
  const devices = JSON.parse(localStorage.getItem("myDevice"));
  const device = devices.find((device) => device.id === schedule.device);
  const fieldName = device.field1;

  return (
    <div>
      <Link to={`/schedule/${schedule.id}`}>
        <div className="flex items-center justify-between">
          <div className="flex">
            <TodayIcon className="mr-2" sx={{ fontSize: 50 }} />
            <div>
              <h3 className="font-poppins font-medium text-lg">
                {schedule.name}
              </h3>
              <h4 className="font-poppins font-normal font-base">
                {device.name} | {fieldName}
              </h4>
            </div>
          </div>

          <div>
            <PowerSettingsNewIcon
              className={schedule.active ? "text-green-600" : "text-red-600"}
              sx={{ fontSize: 50 }}
            />
          </div>
        </div>

        <p className="font-poppins text-sm text-gray-700 py-2 w-80">
          Scheduling automation in <br></br>
          <DateTime dataDate={schedule.datetime} />
        </p>

        <p className="font-poppins text-sm text-gray-500 pt-4">
          {schedule.active
            ? "Schedule is not yet completed"
            : "Schedule Completed"}
        </p>
      </Link>
    </div>
  );
};

export default Schedule;
