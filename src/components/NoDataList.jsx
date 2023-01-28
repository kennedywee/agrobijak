import React from "react";

const NoDataList = () => {
  return (
    <div className="flex items-center justify-center border h-[300px] rounded-lg my-6">
      <div className="items-center justify-center text-center">
        <h1 className="font-poppins font-semibold mb-2">
          There are no data from this device yet!
        </h1>
        <p>Start adding data to your device with the API given.</p>
      </div>
    </div>
  );
};

export default NoDataList;
