// 1. compare two objects
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

//2. copy a string to the clipboard.
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

// 3. converts a comma-separated
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

// 4. convert a comma-separated
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

// 5. convert an array of objects
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

// 6. target a given value
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

// 7. converts a specified number
// to an array of digits.
function numtoArray(num) {
  const numString = num + "";
  const numArray = numString.split("").map((i) => i * 1);

  return numArray;
}

// console.log(numtoArray(123456));

// 8. filter out the specified values
// from a specified array.
// Return the original array without the filtered values.
function filterVal(array, values) {
  return array.filter((arr) => !values.includes(arr));
}
// let arra2 = ["a", "b", "c", "a", "b", "c"];
// console.log(filterVal(arra2, ["b", "a"]));

// 9. combine the numbers of
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

// 10. extract out the values at the specified indexes
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

// 11. generate a random hexadecimal color code.
function getRandomColor() {
  // << left shift
  const result = "#" + (((1 << 24) * Math.random()) | 0).toString(16);

  return result;
}
// console.log(getRandomColor());

// 12 removes non-printable ASCII characters from a given string.
function removeNonASCII(str) {
  return str.replace(/[^\x20-\x7E]/g, "");
}
// console.log(removeNonASCII("äÄçÇéÉêPHP-MySQLöÖÐþúÚ"));

// 13. convert the length of a given string in bytes.
//https://stackoverflow.com/questions/5515869/string-length-in-bytes-in-javascript
// function strLenToBytes(str) {
//   const result = new Blob([str]).size;
//   return result;
// }
// console.log(strLenToBytes("Hello World")); ??

// 14. replace the names of multiple
// object keys with the values provided.
function renameKeys(oldObjs, newkeys) {
  let result = {};
  for (const [key, value] of Object.entries(oldObjs)) {
    if (newkeys[key]) {
      result[newkeys[key]] = value;
    } else {
      result[key] = value;
    }
  }
  return result;
}
// const obj = { name: "Bobo", job: "Programmer", shoeSize: 100 };
// console.log("Original Object");
// console.log(obj);
// console.log("-------------------------------------");
// result = renameKeys(obj, { name: "firstName", job: "Actor" });
// console.log("New Object");
// console.log(result);

// 15. return the minimum-maximum value of an array,
// after applying the provided function to set comparing rule.
function returnMinMax(array, compareFunc) {
  const result = array.reduce((prev, cur) => {
    return compareFunc(prev, cur) > 0 ? prev : cur;
  });

  return result;
}

// console.log(
//   returnMinMax([1, 2, 3], (a, b) => {
//     return a - b;
//   })
// ); // max
// console.log(
//   returnMinMax([1, 2, 3], (a, b) => {
//     return b - a;
//   })
// ); // min

// 16. Write a JavaScript function that returns true
// if the provided predicate function returns true for all elements
// in a collection, false otherwise.
function predicFunc(collection, func) {
  for (let val of collection) {
    if (!func(val)) {
      return false;
    }
  }

  return true;
}
// console.log(predicFunc([1, 2, 3], (val) => val < 0));

// 17. split values of two given arrays into two groups.
// If an element in filter is truthy, the corresponding element
// in the collection belongs to the first group;
// otherwise, it belongs to the second group.
function splitVal(array, filter) {
  let group1 = [];
  let group2 = [];
  for (let i = 0; i < array.length; i++) {
    if (filter[i]) {
      group1.push(array[i]);
    } else {
      group2.push(array[i]);
    }
  }
  return [group1, group2];
}
// console.log(splitVal([1, 2, 3, 4], [true, true, false, true]));

// 18. remove specified elements from the left of a given array of elements.
// specified elements = remove # of elements from left
function remove_elements_left(array, remEle) {
  return array.slice(remEle);
}
// console.log(remove_elements_left([1, 2, 3], 1));

// 19. remove specified elements from the right of a given array of elements.
function remove_elements_right(array, remEle) {
  return remEle >= array.length ? [] : array.slice(0, array.length - remEle);
}
// console.log(remove_elements_right([1, 2, 3], 4));

// 20. extend a 3-digit color code to a 6-digit color code.
function extend3to6(str3) {
  return str3
    .slice(-3)
    .split("")
    .reduce((prev, cur) => {
      return (prev += cur + cur);
    }, "#");
}
// console.log(extend3to6("#03f"));

// 21. get every nth element in a given array.
function getNth(array, n) {
  let result = [];
  for (let i = n; i <= array.length; i += n) {
    result.push(array[i - 1]);
  }

  return result;
}
// console.log(getNth([1, 2, 3, 4, 5, 6], 2));

// 22. filter out the non-unique values in an array.
function filter_non_unique(array) {
  let dic = {};
  let result = {};
  for (let i = 0; i < array.length; i++) {
    if (!dic[array[i]]) {
      dic[array[i]] = true;
      result[array[i]] = true;
    } else {
      delete result[array[i]];
    }
  }

  return Object.keys(result);
}
// console.log(filter_non_unique([1, 2, 2, 3, 4, 4, 4, 5]));

// 23. filter out the non-unique values in an array,
// based on a provided comparator function.
function filter_non_unique_2(array, func) {
  let temp = array.filter((val) => func(val));
  return temp.filter((val) => temp.indexOf(val) === temp.lastIndexOf(val));
}
// console.log(filter_non_unique_2([1, 2, 2, 3, 4, 4, 4, 5], (a) => a > 2));

// 24. decapitalize the first letter of a string.
function decapitalize(str) {
  let str_array = str.split("");
  str_array[0] = str_array[0].toLowerCase();

  return str_array.join("");
}
// console.log(decapitalize("Assds"));

// 25. create a new array out of the two supplied
// by creating each possible pair from the arrays.
function possible_pair(arr1, arr2) {
  // arr1.reduce((acc, x) => acc.concat(arr2.map((y) => [x, y])), []);
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}
// console.log(possible_pair([1, 2], ["a", "b"]));

// 26. return true if the string is y/yes or false if the string is n/no.
function Y_or_N(str) {
  const yes = ["y", "yes"];
  const no = ["n", "no"];
  if (yes.includes(str.toLowerCase())) {
    return true;
  } else if (no.includes(str.toLowerCase())) {
    return false;
  } else {
    return "Please enter y/yes or n/no";
  }
}

// console.log(Y_or_N("yes"));

// 27.find every element that exists in any of the two given arrays once,
// using a provided comparator function. ??
function union(arr1, arr2, comparator) {
  const result = arr1.filter((val1) =>
    arr2.findIndex((val2) => comparator(val1, val2) === -1)
  );

  return result;
}
// console.log(union([2, 3, 4], [2, 3, 4, 5], (a, b) => a === b));

// 28. measure the time taken by a function to execute.
function executeTime() {
  const start = Date.now();
  for (var i = 0; i < 100000000; i++);
  const end = Date.now();
  console.log(`Execution time: ${end - start} ms`);
}
// executeTime();

// 29. convert a value to a safe integer.
function to_safe_int(val) {
  if (val >= Number.MIN_SAFE_INTEGER && val <= Number.MAX_SAFE_INTEGER) {
    return Math.round(val);
  } else if (val < Number.MIN_SAFE_INTEGER) {
    return Number.MIN_SAFE_INTEGER;
  } else {
    return Number.MAX_SAFE_INTEGER;
  }
}
// console.log(to_safe_int(1));

// 30.filter out the element(s) of a given array,
// that have one of the specified values.
function remove_specified(arr, filter) {
  return arr.filter((a) => !filter.includes(a));
}
// console.log(remove_specified([2, 1, 2, 3], [1, 2]));

// 31. Write a JavaScript program to find all elements in a given array except for the first one. Return the whole array if the array's length is 1.

// 32. Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function.

// 33. Write a JavaScript program to get a random number in the specified range.

// 34. Write a JavaScript program to get a random integer in the specified range.

// 35. Write a JavaScript program to get an array of given n random integers in the specified range.

// 36. Write a JavaScript program to create a function that invokes each provided function with the arguments it receives and returns the results.

// 37. Write a JavaScript program to get a sorted array of objects ordered by properties and orders.

// 38. Write a JavaScript program to pad a string on both sides with the specified character, if it's shorter than the specified length.

// 39. Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.

// 40. Write a JavaScript program to create an array of key-value pair arrays from a given object.

// 41. Write a JavaScript program to create an object from the given key-value pairs.

// 42. Write a JavaScript program to get a customized coalesce function that returns the first argument that returns true from the provided argument validation function.

// 43. Write a JavaScript program to change function that accepts an array into a variadic function.

// 44. Write a JavaScript program to remove falsey values from a given array.

// 45. Write a JavaScript program to split values into two groups, if an element in filter is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

// 46. Write a JavaScript program to curry (curries) a function.

// 47. Write a JavaScript program to perform a deep comparison between two values to determine if they are equivalent.

// 48. Write a JavaScript program to get an array of function property names from own (and optionally inherited) enumerable properties of an object.

// 49. Write a JavaScript program to retrieve a set of properties indicated by the given selectors from an object.

// 50. Write a JavaScript program to convert an integer to a suffixed string, adding am or pm based on its value.
