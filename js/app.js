{
    //1. A parameter is the variable you use when making the function
    //an argument is what you pass to the function
    //2. console.log just shows a message in the console
    //return returns some form of data to be used
    //3. you can use a function to manipulate or check data, then manipulate it further.
    // allows you to write it once and use it multiple times
}

const checkPalindrome = (string) =>{
    let reversed = "";    
    for (var i = string.length - 1; i >= 0; i--){        
        reversed += string[i];
    }    
    if(string.toUpperCase()==reversed.toUpperCase()){
        return true;
    }
    else{
        return false;
    }
}
console.log(checkPalindrome("Otto"));
console.log(checkPalindrome("RADGGRTFG"));