import React from "react";

import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";

const InfoBar = ({ error }) => {
  return (
    <div className="bg-orange-100  border flex justify-between items-center py-1 mb-5 ">
      <div className="ml-5 flex">
        <InfoIcon className="text-orange-500" />
        <p className="ml-2">{error}</p>
      </div>
      <div className="mr-5">
        {/* <button>
          <CloseIcon className="text-orange-500" />
        </button> */}
      </div>
    </div>
  );
};

export default InfoBar;
