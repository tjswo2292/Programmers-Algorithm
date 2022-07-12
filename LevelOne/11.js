function solution(price, money, count) {
  let result = 0;
  for (let i = 1; i <= count; i++) {
    result += (i * price);
  }
  return money >= result ? 0 : result - money;
}

console.log(solution(3, 20, 4));

// result에 총 이용료가 들어있어야 됨

// 돈이 남을 때
