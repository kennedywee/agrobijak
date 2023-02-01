import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

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
    <div className="w-full h-full">
      <h1>
        {device.name} | {fieldValue}
      </h1>
      <div className="w-full h-[7.5rem] flex flex-col justify-center items-center">
        <TipsAndUpdatesIcon
          className={field > 0 ? "text-green-600" : "text-red-600"}
          sx={{ fontSize: 50 }}
        />
      </div>
    </div>
  );
};

export default AgroIndicator;
