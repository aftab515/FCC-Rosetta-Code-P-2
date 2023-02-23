function lookAndSay(str) {
  const strArr = str.split('');
  let countStr = '';
  let charCurr = strArr[0];
  let charCount = 1;
  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i] === charCurr) {
      charCount++;
    } else {
      countStr += charCount + charCurr;
      charCurr = strArr[i];
      charCount = 1;
    }
  }
  return countStr + charCount + charCurr;
}