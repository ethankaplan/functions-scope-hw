{
  //1. A parameter is the variable you use when making the function
  //an argument is what you pass to the function
  //2. console.log just shows a message in the console
  //return returns some form of data to be used
  //3. you can use a function to manipulate or check data, then manipulate it further.
  // allows you to write it once and use it multiple times
}

const checkPalindrome = string => {
  let reversed = "";
  for (var i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  if (string.toUpperCase() == reversed.toUpperCase()) {
    return true;
  } else {
    return false;
  }
};
console.log(checkPalindrome("Otto"));
console.log(checkPalindrome("RADGGRTFG"));

const sumDigits = num => {
  let string = num.toString().split("");
  //console.log(string);
  let theSum = 0;
  for (let i = 0; i < string.length; i++) {
    theSum += parseInt(string[i], 10);
  }
  return theSum;
};

console.log(sumDigits(233421));


const calculateSide = (sideA, sideB) =>{
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  }

console.log(calculateSide(8,6));
