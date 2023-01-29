import GaugeChart from "react-gauge-chart";

const AgroGauge = ({ widget, devices, dData }) => {
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
      <GaugeChart
        id="gauge-chart5"
        nrOfLevels={420}
        arcsLength={[0.5, 0.3, 0.2]}
        colors={["#5BE12C", "#F5CD19", "#EA4228"]}
        percent={0.37}
        arcPadding={0.02}
        textColor="#000000"
        formatTextValue={(value) => value + " °C"}
      />
    </div>
  );
};

export default AgroGauge;
