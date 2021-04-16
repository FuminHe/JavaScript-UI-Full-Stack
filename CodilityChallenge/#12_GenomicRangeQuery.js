// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)
  // A = 1
  // C = 2
  // G = 3
  // T = 4

  let result = [];
  for (let i = 0; i < P.length; i++) {
    const part = S.slice(P[i], Q[i] + 1);

    if (part.indexOf("A") !== -1) {
      result.push(1);
      continue;
    }
    if (part.indexOf("C") !== -1) {
      result.push(2);
      continue;
    }
    if (part.indexOf("G") !== -1) {
      result.push(3);
      continue;
    }
    if (part.indexOf("T") !== -1) {
      result.push(4);
      continue;
    }
  }

  return result;
}
