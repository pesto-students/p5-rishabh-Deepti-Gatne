//checking whether given character is vowel
function isVowel(char) {
  return "aeiou".includes(char);
}
//funtion create map consist of count of each vowel in string
//time complexity is O(n) 
function vowelCount(str) {
  const vowelMap = new Map();
  for (let char of str) {
    // to make is work for both upper and lowercase
    let lowerCaseChar = char.toLowerCase();
    //checking if it vowel
    if (isVowel(lowerCaseChar)) {
        //if entry is already in map just increment value
      if (vowelMap.has(lowerCaseChar)) {
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        //else initialize value to 1
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}
// display count of all vowel present in string
console.log(vowelCount("aeyuidio"));
