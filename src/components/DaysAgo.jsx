import moment from "moment/moment";

const DaysAgo = ({ deviceDate }) => {
  return <span>{moment(deviceDate).startOf("day").fromNow()}</span>;
};

export default DaysAgo;
