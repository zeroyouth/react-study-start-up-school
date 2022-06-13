"use strict";

// //1번
//border - left - width를 borderLeftWidth로 변경하기
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

const camelize = (str) => {
  return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}

// //2번
// //배열 arr의 요소 중 a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 해당 요소를 출력해주는 함수 filterRange(arr, a, b)를 작성해봅시다.

const filterRange = (arr, a, b) => {
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);//배열을 반환
console.log(filtered);//[3,1]
console.log(arr);

//3번
//특정 범위에 속하는 요소 찾기(배열 변경하기)
//배열 arr의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRangeInPlace(arr, a, b)를 작성해보세요. 배열의 모든 요소(i)는 다음 조건을 만족해야 합니다. a ≤ arr[i] ≤ b

const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    //범위 밖의 요소 제거 
    if (value < a || value > b) { //또는 - 둘 중 하나만 해당해도 true
      arr.splice(i, 1); //i부터 1개 제거
      i--;
    }
  }
}

let arr2 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4);
console.log(arr2);

//4번
//내림차순으로 정렬
let arr3 = [5, 2, 1, -10, 8];
arr3.sort((a, b) => b - a);
console.log(arr3);

//5번
//배열 복사본을 정렬하기
//slice()를 사용해 배열을 복사하여 다시 정렬
const copySorted = (arr) => {
  return arr.slice().sort();
}

let arr4 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr4);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr4);  // HTML, JavaScript, CSS (no changes)


