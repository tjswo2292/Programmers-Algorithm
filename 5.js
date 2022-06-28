function solution(s, t) {
  let res = true;

  for (let i = 0; i < s.length; i++) {
    if (s.includes(t[i])) {
      return res;
    }

    return res = false;
  }

  return res;
}

console.log(solution('imfinethankyou', 'atfhinemnoyuki'));
