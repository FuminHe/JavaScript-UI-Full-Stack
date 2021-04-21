// --------------- 1 ------------------------------------
// Write a JavaScript program to compare two objects
// to determine if the first one contains equivalent
// property values to the second one.
function compareObjects(obj1, obj2) {
  let result = true;
  for (const [key, value] of Object.entries(obj2)) {
    if (value !== obj1[key]) {
      result = false;
      break;
    }
  }

  return result;
}

// const obj1 = { age: 10, height: 120, gender: "male" };
// const obj2 = { height: 120, gender: "male" };

// console.log(compareObjects(obj1, obj2)); // true
// console.log(compareObjects(obj2, obj1)); // false
// --------------- 1 ------------------------------------

// --------------- 2 ------------------------------------
//Write a JavaScript program to copy a string to the clipboard.
function copy() {
  let copyArea = document.getElementById("copyArea");
  copyArea.focus();
  copyArea.select();

  try {
    const successful = document.execCommand("copy");
    const msg = successful ? "successful" : "unsuccessful";
    console.log("Copying text command was " + msg);
  } catch (err) {
    console.log("Oops, unable to copy");
  }
}
// --------------- 2 ------------------------------------

// --------------- 3 ------------------------------------
// Write a JavaScript program to converts a comma-separated
// values (CSV) string to a 2D array.
function CSVtoArray(CSVString, title) {
  const csv_lines = CSVString.split("/n");
  let result = [];
  let start = 0;
  if (title) {
    start = 1;
  }
  for (let i = start; i < csv_lines.length; i++) {
    const subArray = csv_lines[i].split(",");
    result.push(subArray);
  }
  return result;
}
// const sampleString1 = "1,2,3/n4,5,6";
// console.log(CSVtoArray(sampleString1, false));
// [ [ '1', '2', '3' ], [ '4', '5', '6' ] ]
// const sampleString2 = "col1,col2,col3/n1,2,3/n4,5,6";
// console.log(CSVtoArray(sampleString2, true));
// [ [ '1', '2', '3' ], [ '4', '5', '6' ] ]
// --------------- 3 ------------------------------------

// --------------- 4 ------------------------------------
//  Write a JavaScript program to convert a comma-separated
// values (CSV) string to a 2D array of objects.
// The first row of the string is used as the title row.
function CSVtoObject(CSVString) {
  const csv_lines = CSVString.split("/n");
  const titles = csv_lines[0].split(",");

  let result = [];
  for (let i = 1; i < csv_lines.length; i++) {
    const val = csv_lines[i].split(",");
    let obj = {};
    for (let j = 0; j < titles.length; j++) {
      obj[titles[j]] = val[j];
    }
    result.push(obj);
  }

  return result;
}
// console.log(CSVtoObject(sampleString2));
// [
//     { col1: '1', col2: '2', col3: '3' },
//     { col1: '4', col2: '5', col3: '6' }
//   ]
// --------------- 4 ------------------------------------

// --------------- 5 ------------------------------------
// Write a JavaScript program to convert an array of objects
// to a comma-separated values (CSV) string that
// contains only the columns specified.
function ObjecttoCSV(objArray) {
  const titles = Object.keys(objArray[0]).join(",") + "/n";
  let result = titles;

  for (let i = 0; i < objArray.length; i++) {
    let row = [];
    for ([, val] of Object.entries(objArray[i])) {
      row.push(val);
    }
    result += row.join(",") + "/n";
  }

  return result;
}
// const sampleObj = [
//   { col1: "1", col2: "2", col3: "3" },
//   { col1: "4", col2: "5", col3: "6" },
// ];
// console.log(ObjecttoCSV(sampleObj));
// col1,col2,col3/n1,2,3/n4,5,6/n
// --------------- 5 ------------------------------------

// --------------- 6 ------------------------------------
// Write a JavaScript program to target a given value
// in a nested JSON object, based on the given key.
function target(obj, key) {
  return key in obj
    ? obj[key]
    : Object.values(obj).reduce((prev, cur) => {
        if (prev !== undefined) {
          return prev;
        }

        if (typeof cur === "object") {
          return target(cur, key);
        }
      }, undefined);
}
const data = {
  lev: {
    lev4: "other data",
  },
  level1: {
    level2: {
      level3: "some data",
    },
  },
};
// console.log(target(data, "level3"));
// --------------- 6 ------------------------------------

// --------------- 7 ------------------------------------
// Write a JavaScript program to converts a specified number
// to an array of digits.
function numtoArray(num) {
  const numString = num + "";
  const numArray = numString.split("").map((i) => i * 1);

  return numArray;
}

// console.log(numtoArray(123456));
// --------------- 7 ------------------------------------

// --------------- 8 ------------------------------------
// Write a JavaScript program to filter out the specified values
// from a specified array.
// Return the original array without the filtered values.
function filterVal(array, values) {
  return array.filter((arr) => !values.includes(arr));
}
// let arra2 = ["a", "b", "c", "a", "b", "c"];
// console.log(filterVal(arra2, ["b", "a"]));
// --------------- 8 ------------------------------------

// --------------- 9 ------------------------------------
// Write a JavaScript program to combine the numbers of
// a given array into an array containing all combinations.
function allSets(array) {
  let result = array.reduce(
    (prev, cur) => {
      return prev.concat(
        prev.map((val) => {
          return [cur].concat(val);
        })
      );
    },
    [[]]
  );

  return result;
}
// console.log(allSets([1, 2, 3]));
// --------------- 9 ------------------------------------

// --------------- 10 ------------------------------------
// Write a JavaScript program to extract out the values at the specified indexes
// from a specified array.
function getVal(array, indexes) {
  let result = [];
  for (let i = 0; i < indexes.length; i++) {
    result.push(array[indexes[i]]);
  }
  return result;
}

// let arra1 = ["a", "b", "c", "d", "e", "f"];
// console.log(getVal(arra1, [1, 3]));
// --------------- 10 ------------------------------------

// --------------- 11 ------------------------------------
// Write a JavaScript program to generate a random hexadecimal color code.
function getRandomColor() {
  // << left shift
  const result = "#" + (((1 << 24) * Math.random()) | 0).toString(16);

  return result;
}
// console.log(getRandomColor());
// --------------- 11 ------------------------------------

// --------------- 12 ------------------------------------
// Write a JavaScript program to removes
// non-printable ASCII characters from a given string.
function removeNonASCII(str) {
  return str.replace(/[^\x20-\x7E]/g, "");
}
// console.log(removeNonASCII("äÄçÇéÉêPHP-MySQLöÖÐþúÚ"));
// --------------- 12 ------------------------------------

// --------------- 13 ------------------------------------
// Write a JavaScript program to convert the length of a given string in bytes.
function strLenToBytes(str) {
  const result = new Blob([str]).size;
  return result;
}
// console.log(strLenToBytes("Hello World"));
// --------------- 13 ------------------------------------
