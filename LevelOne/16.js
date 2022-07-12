function solution(left, right) {
  let result = 0;
  const measure = [];

  for (let i = left; i <= right; i++) {
    for (let j = 1; j <= left; j++) { // j의 범위 left를 안 올려줘서 푸는데 오래걸렸음
      if (left % j === 0) { measure.push(j); }
    }
    console.log(measure);
    if (measure.length % 2 === 0) {
      result += left;
      measure.splice(0, measure.length);
    } else {
      result -= left;
      measure.splice(0, measure.length);
    }
    left++;
  }

  return result;
}

console.log(solution(24, 27));

// 13 - 17 사이
// 각 수의 약수의 개수 구하기
// 약수의 개수가 짝수개인지 홀수개인지 판별
// 빈 정수에 약수 개수가 짝수이면 더하고 홀수면 빼기
// 결과값 return
