//Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]” are correct in exp
//Time complexity O(n)
const inputStr = new String("{()]}");
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

//  function will actually check for well formed parenthesis
// time complexity of function isO(n) where n is string length
stack.prototype.check = function () {
  for (char of inputStr) {
    // pushing all opening brackets into stack
    if (char == "{" || char == "(" || char == "[") stackobj.push(el);
    // whenever closing bracket come pop the value from from stack and compare
    else if (char == "}") {
      if (stackobj.pop() != "{") return 0;
    } else if (char == "]") {
      if (stackobj.pop() != "[") return 0;
    } else if (char == ")") {
      if (stackobj.pop() != "(") return 0;
    }
  }

  return 1;
};

const stackobj = new stack(); // creating empty stack
console.log(stackobj.check()); // if all brackets are matched return 1 otherwise 0
