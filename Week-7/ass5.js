//Given an array arr{} of size N having distinct elements, the task is to find the nextgreater element for each element of the array
//Time complexity O(n)
const inputArr = [1, 3, 2, 4];

//initializing max value for all elemts to -1
const max = [-1, -1, -1, -1];
const stack = function () {
  this.list = [];
};

stack.prototype.push = function (value) {
  this.list.push(value);
};
stack.prototype.pop = function () {
  return this.list.pop();
};

stack.prototype.display = function () {
  for (el of this.list) console.log(el);
};
function nextMax() {
  prev = s1.pop();
  //as for the last element of array max will be -1
  index = inputArr.length - 2;
  while ((curr = s1.pop())) {
    if (curr < prev) max[index] = prev;
    else max[index] = max[index + 1];
    prev = curr;
    index--;
  }
 }
const s1 = new stack();
for (el of inputArr) s1.push(el);
nextMax();
console.log(max);
