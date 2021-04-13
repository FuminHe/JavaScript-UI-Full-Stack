function solution(N, A) {
  // initialize
  let max = 0;
  let inner_max = 0;
  let counters = new Array(N).fill(0);

  for (let i = 0; i < A.length; i++) {
    if (1 <= A[i] && A[i] <= N) {
      if (counters[A[i] - 1] < inner_max) {
        counters[A[i] - 1] = inner_max;
      }

      counters[A[i] - 1] += 1;

      if (counters[A[i] - 1] > max) {
        max = counters[A[i] - 1];
      }
    } else if (A[i] === N + 1) {
      inner_max = max;
    }
  }

  for (let j = 0; j < counters.length; j++) {
    if (counters[j] < inner_max) {
      counters[j] = inner_max;
    }
  }

  return counters;
}
