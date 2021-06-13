// 1. read file => can't store the whole file in memory for the application
// 2. row binary data => string is not a helpful option
// => need buffer: read big file, read as chunks, pice by pice

// let buffer = Buffer.alloc(8); // 8 bytes => 1 byte = 8 bits
// console.log(buffer);

// let buffer = Buffer.from([8, 9, 7, 5, 3, 0, 9]);
// console.log(buffer);

// let buffer = Buffer.from("I'm a string", "utf-8");
// console.log(buffer);
// start from 0 byte and read 23 characters
// console.log(buffer.toString("utf-8",0,12));

let buffer = Buffer.alloc(16);
//return how many bites we have write, start writing after 2 bytes
const n = buffer.write("hello", 2, "utf-8");
