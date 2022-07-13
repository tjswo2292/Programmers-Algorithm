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
