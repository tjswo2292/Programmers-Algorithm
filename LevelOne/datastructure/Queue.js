// 선형 자료형, FIFO
// 순서대로 처리해야 하는 작업을 임시로 저장해두는 버퍼로서 많이 사용됨
class Queue {
    constructor() {
        this._arr = [];
    }
    enqueue(item) {
        this._arr.push(item);
        console.log(this._arr);
    }
    dequeue(item) {
        return console.log(this._arr.shift());
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();

