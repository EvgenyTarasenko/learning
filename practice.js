
// Написать рекурсивную функцию вычисления чисел Фибоначчи. На вход функции подавать длину конечного массива чисел.

function countfib(n) {
  let prev = 0;
  let next = 1;
  const array = [];

  for(let i = 0; i < n; i++) {
    array.push(prev);
    let temp = next;
    next = prev + next;
    prev = temp;
  }

  return array;
}

console.log(countfib(5), 'countfib')

// 2) Функция. Принимает массив строк. Должна вернуть массив результатов проверки двух строк.
//  Если у одной строки с последующей первый и последний символы, то true. 
//  Например ["asd", "afffd", "cc", "kk"]. Для такого массива функция должна вернуть [true, false, false]

const arr = ["asd", "afffd", "cc", "kk"];

function compare(arr) {
  let prev;
  let resultArr = arr.map((item, index) => {
    if(index === 0) {
      prev = item;
    } else {
      let firstLet = prev[0];
      let lastLet = prev[prev.length - 1];
      let resultFirst = firstLet === item[0];
      let resultLast = lastLet === item[item.length - 1];

      return resultFirst && resultLast;
    }
  });

  return resultArr.filter(item => typeof item === 'boolean');
}

console.log(compare(arr), 'compare result');

// 3) Написать функцию, которая принимает целочисленный number и рисует спиральную матрицу NxN, где N - входной параметр.
// Например,

// matrix(3)

// Ответ:

// 1 2 3

// 8 9 4

// 7 6 5

let generateMatrix = function(A) {
  let arr = [];
  for(let i = 0; i < A; i++) {
    let items = [];
    for(let j = 0; j < A; j++) {
      items.push(0);
    }
    arr.push(items);
  }

  var spiralMatrix = function(arr) {
    let count = 1;
    let k = 0; 
    let m = arr.length; 
    let l = 0; 
    let n = arr[0].length; 

    while(k < m && l < n) {
      for(var i = l; i < n; i++) {
        arr[k][i] = count;
        count++;
      }
      k++;

      for(var i = k; i < m; i++) {
        arr[i][n - 1] = count;
        count++;
      }
      n--;

      if(k < m) {
        for(var i = n - 1; i >= l; i--) {
          arr[m - 1][i] = count;
          count++;
        }
        m--;
      }

      if(l < n) {
        for(var i = m - 1; i >= k; i--) {
          arr[i][l] = count;
          count++;
        }
        l++;
      }
    }

    return arr;
  };

  return spiralMatrix(arr);
};

console.log(generateMatrix(4));
