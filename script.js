var word = prompt ("What's your first name?");

function ReverseString(str) { 
   return str.split('').reverse().join('') 
} 
document.write(ReverseString(word));

document.write("<br><br>");



function initialString(str) { 
   return str.charAt(0);
  
} 
document.write(initialString(word));

// document.write("<br><br>");


// String() s = {"your", "array", "of", "strings"};

// Random ran = new Random();
// String s_ran = s[ran.nextInt(s.length)];