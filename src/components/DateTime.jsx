import moment from "moment/moment";

const DateTime = ({ dataDate }) => {
  const date = moment(dataDate);
  return <span>{date.format("MM/DD/YYYY h:mm:ss a")}</span>;
};

export default DateTime;
