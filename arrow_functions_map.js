// Arrow Functions / map

let arr = [1, 5, 8, 10, 20];

arr.forEach(function(item, index) {
  arr[index] = item * 2;
});


// Com es6
let arr = [1, 5, 8, 10, 20];
arr.map((num) => num * 2);