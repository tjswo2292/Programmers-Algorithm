function solution(s) {
  const change = (a) => a[0].toUpperCase() + a[1].toLowerCase();
  return s.toUpperCase().replace(/(\w)(\w)/g, change);
}
console.log(solution('try hello world'));

// /(\w)(\w)/g 연속된 두 문자
// 정규식 표현 잘 모르겠음
