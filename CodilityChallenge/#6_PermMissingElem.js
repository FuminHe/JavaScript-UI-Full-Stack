function solution(A) {
  if (A.length === 0) return 1;

  const sum = ((1 + A.length) * (A.length + 2)) / 2;
  const realSum = A.reduce((preVal, curVal) => preVal + curVal);

  return sum - realSum;
}

console.log(solution([1, 3, 2, 5]));
