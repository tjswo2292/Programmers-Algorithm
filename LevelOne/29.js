// 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면
// J를 대기목록의 가장 마지막에 넣는다.
// 그렇지 않다면 J 인쇄

function solution(priorities, location) {
    let head = [];
    let result = 0;

    for (let i = 0; i < priorities.length; i++) {
        head.push([priorities[i], i]);
    }

    // 배열안에 head[0][0] 큰 값이 있으면 맨 뒤로 보내기
    for (let i = 0; i < head.length; i++) {
        for (let j = 1; j < head.length; j++) {
            if (head[0][0] < head[j][0]) {
                head.push(head.splice(0, 1));
            }
        }
    }

    head.map((element, index) => {
        if (element[1] === location) {
            result = head.indexOf(element)
        }
    })

    return result + 1;
}

console.log(solution([2, 1, 3, 2], 2));
// location 2 는 내가 원하는 출력물의 index