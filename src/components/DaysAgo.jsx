const DaysAgo = ({ deviceDate }) => {
  const date = new Date(deviceDate);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <span>
      {diffDays} {diffDays > 1 ? "Days" : "Day"} Ago
    </span>
  );
};

export default DaysAgo;
