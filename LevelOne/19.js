function solution(participant, completion) {
    let array = [...new Set(participant)];
    array.sort();
    completion.sort();
    
    for(let item of array) {
        if(!(completion.includes(item))){
            return item
        }
    }
}

console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));

// 완주하지 못한 선수
// 효율성 테스트 통과 못함
// test case 2,5 통과 못함
// 다시 풀어야 됨