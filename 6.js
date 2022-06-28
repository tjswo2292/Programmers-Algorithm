function solution(n) {
  const answer = n.toString().split('').map(Number);
  let result = 0;
  for (let i = 0; i < answer.length; i++) {
    result += answer[i];
  }

  return result;
}

console.log(solution(123));
// 양의 정수 -> 문자열 배열 -> 정수 배열
