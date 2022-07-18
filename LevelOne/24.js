// 음양 더하기

function solution(absolutes, signs) {
  const result = decision(absolutes, signs);
  let answer = 0;

  for (let i = 0; i < result.length; i++) {
    if (result[i].id === true) {
      answer += result[i].value;
    } else {
      answer += result[i].value * -1;
    }
  }

  return answer;
}

function decision(absolutes, signs) {
  const is = [];

  for (let i = 0; i < absolutes.length; i++) {
    is.push({
      value: absolutes[i],
      id: signs[i],
    });
  }

  return is;
}

console.log(solution([1, 2, 3], [false, false, true]));

// 양수 -> 음수  * -1
