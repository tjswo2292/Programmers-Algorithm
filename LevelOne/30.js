function solution(bridge_length, weight, truck_weights) {
    // 하나의 동작이 끝나면 시간을 +1 해준다.
    // truck_weights의 length가 0이면 time을 return한다. -> 대기 트럭이 없어도 다리를 건너는 중인 트럭이 있을 수도 있으니 return 값에 +1을 해준다.

    let time = 0; // 시간
    let pending = []; // 대기 중인 트럭
    let maxWeight = 0;

    while(truck_weights.length > 0) {
        // 트럭 대수와 무게를 조건으로 걸어야 함
        // 1. truck_weights > 0
        // 2. bridge_length, weight의 조건에 부합하면 
        if(pending.length !== 0) {
            maxWeight = pending.forEach(element => maxWeight += element);
        }

        if(pending.length <= bridge_length && maxWeight <= weight) {
            pending.push(truck_weights.shift());
            console.log(pending);
            time++;
        } else {
            pending.shift();
            time++;
            pending.push(truck_weights.shift());
            console.log(pending);
        }
    }

    return time + 1;
}

console.log(solution(2, 10, [7, 4, 5, 6]));

// bridge_length : 다리에 올라 갈  수 있는 트럭의 수
// weight : 다리가 견딜 수 있는 무게
// truck_weights : 트럭 별 무게
// 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return