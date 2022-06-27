function solution(n) {
  return Number(n.toString().split('').sort().reverse()
    .join(''));
}

console.log(solution(118372));
