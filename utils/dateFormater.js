const dateFormatter = (_date) => {
  console.log("Date; ", _date);
  const yyyy = _date.getFullYear();
  let mm = _date.getMonth() + 1; // Months start at 0!
  let dd = _date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return yyyy + "-" + mm + "-" + dd;
};

export default dateFormatter;
