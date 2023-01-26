import { Link } from "react-router-dom";
import { favicon } from "../assets";

import DeviceHubRoundedIcon from "@mui/icons-material/DeviceHubRounded";

const Card = () => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl">
      <Link>
        <div className="flex items-center mb-3">
          <DeviceHubRoundedIcon />
          <h5 className="ml-1 text-xl font-bold tracking-tight text-gray-900 ">
            Arduino Uno | Back Farm
          </h5>
        </div>

        <p className="mb-3 text-sm font-normal text-gray-700 ">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>

        <p className="mb-3 text-xs font-normal text-gray-500 ">
          Last updated: 16 days ago.
        </p>

        <div class="pt-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #farm
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #pump
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Card;
