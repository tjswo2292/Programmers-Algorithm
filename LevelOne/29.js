// 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면
// J를 대기목록의 가장 마지막에 넣는다.
// 그렇지 않다면 J 인쇄

function solution(priorities, location) {
    let head = [];
    let result = 0;
    let resultArr = [];

    // 2차원 배열로 만듦
    for (let i = 0; i < priorities.length; i++) {
        head.push([priorities[i], i]);
    }

    // 값을 비교
    // 인쇄 되는 값(요소 중에서 가장 큰 값)을 resultArr에 담기
    while(head.length > 0) {
        for (let i = 1; i < head.length; i++) {
            if (head[0][0] < head[i][0]) {
                head.push(head[0]);
                head.splice(0, 1);
                i = 0;
            }
        }
        resultArr.push(head.shift());
    }
    
    // location : 2, head[i][1] === 2 인 요소의 index + 1을 return
    resultArr.map((element, index) => {
        if (resultArr[index][1] === location) {
            result = resultArr.indexOf(resultArr[index]) + 1;
        }
    })

    return result;
}

console.log(solution([2,1,3,2], 2));
// location 2 는 내가 원하는 출력물의 index