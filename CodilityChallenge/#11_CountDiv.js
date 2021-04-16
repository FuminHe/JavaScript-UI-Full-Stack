function solution(A, B, K) {
  const offset = A % K === 0 ? 1 : 0;
  const count = Math.floor(B / K) - Math.floor(A / K) + offset;
  return count;
}
