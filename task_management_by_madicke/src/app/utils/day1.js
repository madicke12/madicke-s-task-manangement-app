const f = require('fs');
const readline = require('readline');
const file = './input.txt';
let sumCalibrationValues = 0;
const r = readline.createInterface({
  input: f.createReadStream(file)
});
r.on('line', function (text) {
  let tabCalibration = [];
  text.split("").forEach((i) => {
    if (i.trim() !== "") {
      const convertNumber = parseInt(i);
      if (typeof convertNumber === 'number' && convertNumber !== null && convertNumber !== undefined && !isNaN(convertNumber)) {
        tabCalibration.push(convertNumber);
      }
    }
  });
  if (tabCalibration.length >= 2) {
    const calibnumber = Number(`${tabCalibration[0]}${tabCalibration[tabCalibration.length - 1]}`);
    sumCalibrationValues = sumCalibrationValues + calibnumber;
  } else if (tabCalibration.length === 1) {
    const calibnumber = Number(`${tabCalibration[0]}${tabCalibration[0]}`);
    sumCalibrationValues = sumCalibrationValues + calibnumber;
  }
  console.log(sumCalibrationValues) // Value : 55447
});