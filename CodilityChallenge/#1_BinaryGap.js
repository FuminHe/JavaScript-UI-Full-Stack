function solution(N) {
  // check if N is an integer and within the limit
  if (!Number.isInteger(N) || N < 1 || N > 2147483647) {
    return 0;
  }

  // convert N to binary
  const N_binary = N.toString(2);
  console.log(N_binary);

  let count = 0;
  let result = 0;
  for (let i = 0; i < N_binary.length; i++) {
    if (N_binary[i] == 0) {
      count += 1;
    }

    if (N_binary[i] == 1) {
      if (result == 0 || result < count) {
        result = count;
      }
      count = 0;
    }
  }

  return result;
}

console.log(solution(9.323));
