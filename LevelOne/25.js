function solution(numbers, hand) {
  function find(key) {
    const keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (keypad[i][j] === key) {
          return keypad[i][j];
        }
      }
    }
  }

  let result = '';
  let left = '*';
  let right = '#';

  for (const i of numbers) {
    // 1,4,7은 왼손 고정
    if (i === 1 || i === 4 || i === 7) {
      result += 'L';
      left = i;
    } else if (i === 3 || i === 6 || i === 9) {
      result += 'R';
      right = i;
    } else {
      // 각 숫자의 위치를 찾아 index 저장
      const r = find(right);
      const l = find(left);
      const middle = find(i);
      // middle을 기준으로 거리를 구한다.
      // 절댓값 함수 사용
      const rr = Math.abs(r[0] - middle[0]) + Math.abs(r[1] - middle[1]);
      const ll = Math.abs(l[0] - middle[0]) + Math.abs(l[1] - middle[1]);
      // 구한 거리로 어떤 손으로 i 값을 누를지 판별
      // 구한 거리가 같으면
      if (rr === ll) {
        hand === 'right' ? (right = i, result += 'R') : (left = i, result += 'L');
      }
      // 오른손의 거리가 더 멀다
      else if (rr > ll) {
        result += 'L';
        left = i;
      }
      // 왼손의 거리가 더 멀다
      else {
        result += 'R';
        right = i;
      }
    }
  }

  return result;
}

// keypad의 위치 찾는 함수

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'rigth'));

// 순서대로 누를 번호가 담긴 배열 numbers
// 왼,오 잡이 나타내는 문자열 hand
// 각 번호를 누른 엄지손가락이 왼손인 이 오른손인 지를 나타내는 연속된 문자열 return
