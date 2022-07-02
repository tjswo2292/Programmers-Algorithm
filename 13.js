function solution(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }
  // set 사용법을 잘 몰랐음
  const answer = [...new Set(result)]; // 객체니까 가르키는 화살표는 변하게 하기 위해 스프레드 문법
  return answer.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));

// 하나씩 다 더해서 배열에 저장
// 저장된 값을 오름차순으로 정렬
// 정렬 값 중에서 중복되는 값 제거

// 프로그래머스 풀이 봄
