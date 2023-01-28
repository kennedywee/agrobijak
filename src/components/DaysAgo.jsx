import moment from "moment/moment";

const DaysAgo = ({ deviceDate }) => {
  const date = moment(deviceDate);

  const diffInDays = moment().diff(date, "days");
  let relativeTime;

  if (diffInDays >= 1) {
    relativeTime = date.startOf("day").fromNow();
  } else {
    relativeTime = date.startOf("hour").fromNow();
  }

  return <span>{relativeTime}</span>;
};

export default DaysAgo;
