import moment from "moment";
const formatFrom = [
  "DD/MM",
  "DD/MM/YYYY",
  "MM/YYYY",
  "YYYY",
  "MM",
  "DD",
  "YYYY/MM",
];
const formatDate = (date) => {
  if (date == "" || null || undefined) return;
  return formatFrom.map((el) => moment(date).format(el));
};

//someChanges

console.log(formatDate("8 may 2000"))