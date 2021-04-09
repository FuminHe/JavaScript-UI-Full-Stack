// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const A_filtered = A.filter((a) => a > 0);
  A_filtered.sort((a, b) => a - b);

  // no positive(>0) or no 1
  if (A_filtered.length === 0 || A_filtered[0] !== 1) {
    return 1;
  }

  for (let i = 0; i < A_filtered.length - 1; i++) {
    if (A_filtered[i + 1] - A_filtered[i] > 1) {
      return A_filtered[i] + 1;
    }
  }

  return A_filtered[A_filtered.length - 1] + 1;
}

console.log(solution([1, 3, 6, 1, 2]));
// console.log(solution([4, 5, 6, 2]));
// console.log(solution([4, 5, 6, 3, -4, 0, 1]));
