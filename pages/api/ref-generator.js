export default function handler(req, res) {
  let _date = new Date();

  let ref =
    Number(_date.getTime().toString().slice(-8, -3)).toString(16) +
    "0" +
    _date.getDate() +
    "0" +
    (_date.getMonth() + 1) +
    _date.getFullYear().toString().slice(-2);
  res.status(200).json({ ref });
}
