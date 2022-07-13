function solution(nums){
    let answer = [...new Set(nums)];
    let limit = nums.length / 2;

    return answer.length > limit ? limit : answer.length;
}

console.log(solution([3,3,3,2,2,2]))


// hash 포켓몬
// 구글 검색