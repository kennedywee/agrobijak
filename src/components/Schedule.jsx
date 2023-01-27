import { Link } from "react-router-dom";

import TodayIcon from "@mui/icons-material/Today";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Schedule = ({ schedule }) => {
  return (
    <div className="col-span-1 border p-5 rounded-lg cursor-pointer hover:shadow-lg">
      <Link to={`/schedule/1`}>
        <div className="flex items-center justify-between">
          <div className="flex">
            <TodayIcon className="mr-2" sx={{ fontSize: 50 }} />
            <div>
              <h3 className="font-poppins font-medium text-lg">
                Turn Off Pump
              </h3>
              <h4 className="font-poppins font-normal font-base">
                Arduino Uno Rev3 | Pump A
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
          Scheduling automation in <br></br> 9:00AM on 14/02/2022
        </p>

        <p className="font-poppins text-sm text-gray-500 pt-4">
          Schedule is not yet completed
        </p>
      </Link>
    </div>
  );
};

export default Schedule;
