function loopSimult(A) {
  const concatArr = Array(A[0].length).fill('');
  for (let i = 0; i < A[0].length; i++) {
    for (let j = 0; j < A.length; j++) {
      concatArr[i] += A[j][i];
    }
  }
  return concatArr;
}