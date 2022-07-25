function solution(name) {
    let alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    let strLength = name.length;
    let strDefault = [];
    let alphabetIndex = 0;

    for (let i = 0; i < strLength; i++) {
        strDefault.push("A");
    };

    for (let i = 0; i < strLength; i++) {
        if (strDefault[i] !== name[i]) {
            strDefault.splice(i, 1, name[i]);
            if (alphabet.indexOf(name[i]) > 12) {
                alphabetIndex += 1; // z부터 시작하기
                alphabetIndex += 25 - alphabet.indexOf(name[i]);
                if (i !== 5) // 커서가 마지막일 때는 +1 안해주는 조건
                    alphabetIndex += 1;
            } else {
                alphabetIndex += alphabet.indexOf(name[i]);
                alphabetIndex += 1;
            }
        } else {
            alphabetIndex += 1; // A면 커서를 다음으로 옮기기
        }
    }

    return alphabetIndex;
}

console.log(solution("JAN"));

// ABCDEFGHIJKLMNOPQRSTUVWXYZ

// AAA
// 첫 번째 위치에서 조이스틱 위로 9번 : JAA
// 왼쪽으로 1번 조작 커서를 마지막 문자로 이동 : JAA|
// 아래로 1번 조작 Z완성 : JAZ

// Logic
// 만들어야 할 문자의 길이를 판단하기 위해서 name.length를 변수에 초기화
// name.length 만큼 A를 변수에 저장
// name을 기준으로 조이스틱을 이동하여 strDefault를 만들기
// 조이스틱을 어떻게 움직일 것이냐
// strDefault와 name을 비교