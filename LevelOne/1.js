function solution(n) {
  let sqaureRoot = 0;

  if (Number.isInteger(Math.sqrt(n))) {
    sqaureRoot = Math.sqrt(n) + 1;
    sqaureRoot *= sqaureRoot;
  } else {
    return -1;
  }
  return sqaureRoot;
}

console.log(solution(121));
