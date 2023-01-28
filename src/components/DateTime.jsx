import moment from "moment/moment";

const DateTime = ({ dataDate }) => {
  const date = moment(dataDate);
  return <div>{date.format("MM/DD/YYYY h:mm:ss a")}</div>;
};

export default DateTime;
