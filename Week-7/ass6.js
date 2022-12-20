//Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types (i) 1 x (a queryof this type means pushing 'x' into the queue) (ii) 2 (a query of this type means to popelement from queue and print the poped element)
//Time complexity O(n)

const inputArr = [1, 2, 1, 3, 2, 1, 4, 2];
//fuction to initialize stack
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
//function to make stack work like Q
//removing from one stak and addign to another
stack.prototype.popelement = function (s2) {
  while ((el = this.pop())) s2.push(el);
  console.log(s2.list.pop());
  while ((el = s2.pop())) this.push(el);
};

//1 to push element and 2 for pop
function stackAsQ()
{
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] == 1) stack1.push(inputArr[++i]);
        else if (inputArr[i] == 2) stack1.popelement(stack2);
      }
}
const stack1 = new stack();
const stack2 = new stack();
stackAsQ();

