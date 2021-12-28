const schools = {
  "Yorktown": 10,
  "Washington & Lee": 2,
  "Wakefield": 5
}

const schoolsArr = Object.keys(schools).map(k => ({name: k, winner: schools[k]}));
console.log(schoolsArr);
