// problem : a number u is given. u is sum of two numbers in the array. we have to find that two numbers.

// sorting the array
// seting point in two edges , setting a middle point. the left edge is index 0 and the right edge is index=length-1
//if the sum of i+j is bigger it shall come left from the higher boundary.
//if sum is little than the target it shall come to one right direction from i

// in this case
var flag = true;
const array = [23, 88, 8, 35, 14, 53, 67, 98, 80, 32];
const bArray = structuredClone(array);

array.sort(function (a, b) {
  return a - b;
});
const target = 22;
//if the sum becomes greater
console.log("array:", array);
console.log("length of the array:", array.length);
var i = 0;
var j = array.length - 1;
while (flag == true) {
  if (array[i] + array[j] == target) {
    flag = false;
    console.log("now value of bArray is :", bArray);
    console.log(
      "it is found at:",
      bArray.indexOf(array[i]),
      bArray.indexOf(array[j])
    );
  }
  if (array[i] + array[j] < target) {
    console.log("i has been increased, i:", i);
    i++;
  }
  if (array[i] + array[j] > target) {
    console.log("j has been decreased,j:", j);
    j--;
  }
}

/*
array.sort()




*/
