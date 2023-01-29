import GaugeChart from "react-gauge-chart";
const data = [
  {
    id: 13,
    field1: 35,
    field2: 25,
    field3: 1,
    field4: 1,
    field5: 1,
    created: "2023-01-28T21:35:57.243508+08:00",
    device: 1,
  },
  {
    id: 12,
    field1: 35,
    field2: 1,
    field3: 1,
    field4: 1,
    field5: 1,
    created: "2023-01-28T21:35:48.587876+08:00",
    device: 1,
  },
  {
    id: 11,
    field1: 35,
    field2: 1,
    field3: 1,
    field4: 1,
    field5: 1,
    created: "2023-01-28T21:25:39.334886+08:00",
    device: 1,
  },
  {
    id: 10,
    field1: 35,
    field2: 1,
    field3: 1,
    field4: 1,
    field5: 1,
    created: "2023-01-28T21:25:36.944510+08:00",
    device: 1,
  },
  {
    id: 9,
    field1: 1,
    field2: 1,
    field3: 1,
    field4: 1,
    field5: 1,
    created: "2023-01-28T21:25:18.729815+08:00",
    device: 1,
  },
  {
    id: 8,
    field1: 35,
    field2: null,
    field3: null,
    field4: null,
    field5: null,
    created: "2023-01-28T21:25:17.630000+08:00",
    device: 1,
  },
  {
    id: 7,
    field1: 35,
    field2: null,
    field3: null,
    field4: null,
    field5: null,
    created: "2023-01-28T21:24:48.419710+08:00",
    device: 1,
  },
  {
    id: 6,
    field1: 1,
    field2: 1,
    field3: 1,
    field4: 1,
    field5: 1,
    created: "2023-01-28T19:47:16.482598+08:00",
    device: 1,
  },
  {
    id: 5,
    field1: 2,
    field2: 2,
    field3: 2,
    field4: 2,
    field5: 2,
    created: "2023-01-28T19:43:03.060328+08:00",
    device: 1,
  },
  {
    id: 4,
    field1: 4,
    field2: 4,
    field3: 4,
    field4: 4,
    field5: 4,
    created: "2023-01-28T18:36:12.995625+08:00",
    device: 1,
  },
  {
    id: 3,
    field1: 3,
    field2: 3,
    field3: 3,
    field4: 3,
    field5: 3,
    created: "2023-01-28T18:04:58.199521+08:00",
    device: 1,
  },
  {
    id: 2,
    field1: 2,
    field2: 2,
    field3: 2,
    field4: 2,
    field5: 2,
    created: "2023-01-28T18:04:20.390143+08:00",
    device: 1,
  },
  {
    id: 1,
    field1: 1,
    field2: 1,
    field3: 1,
    field4: 1,
    field5: 1,
    created: "2023-01-28T17:35:42.770731+08:00",
    device: 1,
  },
];

const AgroGauge = () => {
  const fieldParam = "field2";
  const fieldValue = data[0][fieldParam];

  const value = fieldValue / 100;

  return (
    <GaugeChart
      id="gauge-chart3"
      nrOfLevels={1}
      textColor="#000000"
      colors={["#FF5F6D", "#FFC371"]}
      arcWidth={0.3}
      percent={value}
    />
  );
};

export default AgroGauge;
