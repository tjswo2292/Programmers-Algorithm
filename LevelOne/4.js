function solution(nums, operations) {
  const res = [];
  const numArray = nums.map(Number);
  let index = 0;

  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case 'i':
        index = numArray[i] + 1;
        res[i] = index;
        break;
      case 'm':
        index = numArray[i] * 2;
        res[i] = index;
        break;
      case 'd':
        index = numArray[i] - 1;
        res[i] = index;
        break;
    }
  }
  return res.map(String);
}

console.log(solution(['5', '2', '4', '3'], ['i', 'i', 'd', 'm']));
