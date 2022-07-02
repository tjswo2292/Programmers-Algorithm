function solution(a, b) {
  const arr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(`2016-${a}-${b}`);
  const day = date.getDay();
  return arr[day];
}

console.log(solution(5, 24));
