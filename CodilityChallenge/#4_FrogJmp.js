function solution(X, Y, D) {
  const result = Math.ceil((Y - X) / D);
  // .ceil .floor .round
  return result;
}

console.log(solution(10, 85, 30));
