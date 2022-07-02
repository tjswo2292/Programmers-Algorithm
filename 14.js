// budget에서 금액을 뺀 로직
// function solution(d, budget) {
//   const sortArr = d.sort((a, b) => a - b);
//   let result = 0;

//   for (let i = 0; i < d.length; i++) {
//     result = budget - sortArr[i];
//     budget = result;
//     if (budget < 0) return i;
//     if (budget === 0) return i + 1;
//   }
// }
// console.log(solution([1, 3, 2, 5, 4], 9));

// d의 요소들을 더한 값의 대소로 판단

function solution(d, budget) {
  const sortArr = d.sort((a, b) => a - b);
  let result = 0;
  let count = 0;

  for (let i = 0; i < d.length; i++) {
    count++;
    result += sortArr[i];

    if (result > budget) count--;
  }
  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9));
