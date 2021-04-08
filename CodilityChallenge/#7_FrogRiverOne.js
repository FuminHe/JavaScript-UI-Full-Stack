function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  pos_dic = {};

  let count = ((X + 1) * X) / 2;
  let result = -1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] <= count && !pos_dic[A[i]]) {
      pos_dic[A[i]] = true;
      count -= A[i];
    }

    if (count === 0 && pos_dic[A[i]]) {
      result = i;
      break;
    }
  }

  // console.log(pos_dic);

  return result;
}
