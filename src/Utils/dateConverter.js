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
  const monthIndex = parseInt(sqlDate.slice(5, 7));
  const day = sqlDate.slice(8, 10);
  const rightMonth = months[monthIndex];
  const year = sqlDate.slice(0, 4);
  const hour = sqlDate.slice(11, 16);
  const niceDate = `${day}-${rightMonth}-${year} at ${hour}`;
  return niceDate;
};

module.exports = { dateConverter };
