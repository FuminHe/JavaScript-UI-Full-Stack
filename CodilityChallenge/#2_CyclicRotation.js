// A: Array, K: rotate K times
function solution(A, K) {
  if (K === A.length || K === 0) {
    return A;
  }

  // make sure the value of K < A.length
  K = K % A.length;
  // slice the array into two parts
  // If start is undefined, slice starts from the index 0.
  // If start is greater than the index range of the sequence, an empty array is returned.
  const left_part = A.slice(0, A.length - K);
  // If end is omitted, slice extracts through the end of the sequence (arr.length).
  // If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).
  const right_part = A.slice(A.length - K);

  return right_part.concat(left_part);
}

console.log(solution([100], 5));
// solution([100], 5);
