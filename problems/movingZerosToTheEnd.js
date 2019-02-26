/**
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

 * moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */

var moveZeros = function(arr) {
  let count = 0;
  let transformArr = arr.filter(el => {
    if (el === 0) {
      count += 1;
    }
    return el !== 0;
  });
  while (count > 0) {
    transformArr.push(0);
    count--;
  }

  return transformArr;
};

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
