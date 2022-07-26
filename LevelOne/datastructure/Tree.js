// 여러 데이터가 계층 구조 안에서 서로 연결된 형태를 나타낼 때 사용
// 계층 구조를 나타내기 위해, 꼐층구조를 통해 알고리즘의 효율을 높이고자 할 때

class Node {
    constructor(content, children = []) {
        this.content = content;
        this.children = children;
    }
}

const tree = new Node('hello', [
    new Node('world'),
    new Node('and'),
    new Node('fun', [
        new Node('javascript!')
    ])
]);

function traverse(node) {
    console.log(node.content);
    for (let child of node.children) {
        traverse(child);
    }
}

traverse(tree);