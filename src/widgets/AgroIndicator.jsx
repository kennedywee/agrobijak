import WbSunnyIcon from "@mui/icons-material/WbSunny";

const AgroIndicator = ({ widget, devices, dData }) => {
  const id = widget.device;
  const device = devices.find((e) => e.id === id);

  if (!device) {
    console.error("Device not found");
    return;
  }

  const fieldStr = widget.datafield;
  const fieldValue = device[fieldStr];

  let data = dData.filter(function (entry) {
    return entry.device === id;
  });

  if (data.length === 0) {
    console.error("Data not found for device");
    return;
  }

  const singleData = data[0];

  const field = singleData[fieldStr];

  const value = field / 100;

  return (
    <div>
      <WbSunnyIcon
        className={field > 0 ? "text-teal-900" : "text-red-900"}
        sx={{ fontSize: 75 }}
      />
    </div>
  );
};

export default AgroIndicator;
