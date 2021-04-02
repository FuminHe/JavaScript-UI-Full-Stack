function solution(A) {
  A_dic = {};

  A.forEach((a) => {
    if (a in A_dic) {
      A_dic[a] += 1;
    } else {
      A_dic[a] = 1;
    }
  });

  //   exceed the time limit
  //   for (const [key, value] of Object.entries(A_dic)) {
  //     if (value % 2 !== 0) {
  //       return typeof key;
  //     }
  //   }

  let filteredArr = Object.keys(A_dic).filter((el) => A_dic[el] % 2);
  return filteredArr[0] * 1;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
