function solution(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      result += i;
    }
  }

  return result;
}

// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴 하는 함수를 완성해주세요.

// Tc
// n	return
// 12	28
// 5	6

console.log(solution(12));
