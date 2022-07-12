// 10진수 양의 정수 매개변수 --> 3진법으로 변경 --> 배열로 변경 그래야 pop() 사용가능
// temp라는 빈 배열 만들어서 뒤집어 주기 --> 정수로 변경하기 -->
// 10진법으로 변경하고 return

function solution(n) {
  const result = parseInt(n.toString(3).split('').reverse().join(''), 3);

  return result;
}

console.log(solution(45));
