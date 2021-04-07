function solution(A) {
  // 0 < P < N
  let right = A.slice(1).reduce((previous, current) => previous + current);
  let left = A[0];

  let result = Math.abs(right - left);
  for (let i = 1; i < A.length - 1; i++) {
    left += A[i];
    right -= A[i];

    const curDif = Math.abs(right - left);
    if (curDif < result) {
      result = curDif;
    }
  }

  return result;
}

console.log(solution([-1000, 1000]));
