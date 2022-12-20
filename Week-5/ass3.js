//function to check duplicate entr in array
function hasDuplicate(arr) {
//converting arr into set
  let setArr = new Set(arr);
  //checking lgth of arr with set and returning result
  if (setArr.size == arr.length) 
    console.log("false");
  else console.log("true");
}

hasDuplicate([1, 2, 3, 4, 1]);
