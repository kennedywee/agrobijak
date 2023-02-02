import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useSelector } from "react-redux";

const AgroIndicator = ({ widget, devices, dData }) => {
  const id = widget.device;
  const device = devices.find((e) => e.id === id);

  if (!device) {
    // console.error("Device not found");
    return;
  }

  const fieldStr = widget.datafield;

  let data = dData.filter(function (entry) {
    return entry.device === id;
  });

  if (data.length === 0) {
    // console.error("Data not found for device");
    return;
  }

  const singleData = data[0];
  const field = singleData[fieldStr];

  return (
    <div>
      {field > 0 ? (
        <WbSunnyIcon className="text-teal-900" sx={{ fontSize: 75 }} />
      ) : (
        <WbSunnyOutlinedIcon className="text-red-600" sx={{ fontSize: 75 }} />
      )}
    </div>
  );
};

export default AgroIndicator;
