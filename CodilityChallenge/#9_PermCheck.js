function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  // sort
  A.sort(function (a, b) {
    return a - b;
  });

  if (A[0] !== 1) {
    return 0;
  }

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] + 1 !== A[i + 1]) {
      return 0;
    }
  }

  return 1;
}
