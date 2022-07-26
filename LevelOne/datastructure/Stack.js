// 선형 자료형, LIFO
// 서로 관계가 있는 여러 작업을 연달아 수행하면서
// 이전의 작업 내용을 저장해 둘 필요가 있을 때 사용
class Stack {
    constructor() {
        this._arr = [];
    }
    push(item) {
        this._arr.push(item);
        console.log(this._arr);
    }
    pop() {
        this._arr.pop();
        console.log(this._arr);
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();