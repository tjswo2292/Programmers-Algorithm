// 소수 만들기
function solution(nums) {
  let result = 0;
  let primeCount = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let z = j + 1; z < nums.length; z++) {
        result = nums[i] + nums[j] + nums[z];
        primeCount += primeNum(result);
      }
    }
  }

  return primeCount;
}

function primeNum(result) {
  let divisor = 0;
  for (let i = 1; i <= result; i++) {
    if (result % i === 0) {
      divisor++;
    }
  }

  if (divisor === 2) { return 1; }
  return 0;
}

console.log(solution([1, 2, 7, 6, 4]));
