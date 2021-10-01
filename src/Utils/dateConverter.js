const dateConverter = (sqlDate) => {
  const months = [
    "none",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthIndex = parseInt(`${sqlDate[5]}${sqlDate[6]}`);
  const rightMonth = months[monthIndex];
  return rightMonth;
};

module.exports = { dateConverter };
