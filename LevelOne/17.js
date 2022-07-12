function solution(n, stages){
    let failPlayer = 0; // 스테이지에 도달 했으나 클리어 못한 플레이어
    let arrivePlayer = stages.length; // 스테이지에 도달한 플레이어 수
    let result = [];

    for(let i=1; i<=n; i++) { // i = 스테이지 단계
        for(let j=0; j<stages.length; j++) { // stage1을 클리어 하지 못한 플레이어를 구하는 logic
            if(i === stages[j]) { // i랑 사용자 stage가 같으면 
                failPlayer++;
            }
        } // 이 logic이 종료되면 다음 stage로 넘어간다.
        result.push({stage: i, percent: failPlayer / arrivePlayer}); 
        arrivePlayer -= failPlayer;
        failPlayer = 0;
    }
    
    // 이부분 이해가 잘 안감
    result.sort((a, b) => {
        if(a.percent === b.percent) return a.stage - b.stage;
        else return b.percent - a.percent;
    })

    return result.map(a => a.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));