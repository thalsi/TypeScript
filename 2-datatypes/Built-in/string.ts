

//---------------------- 2. string ----------------------------------------

/*
2.  string
      1. indexOf()
         - (substr, [start])
         - returns the index position of character value passed with method. If not found, -1 is returned.
      2. lastIndexOf()
         - (substr, [end])
         - returns the last index position of character value passed with method. If not found, -1 is returned.
      3. replace()
         - (originalstr,newstr)
         - search for a specified regular expression in a given string and then replace it if the match occurs.
      4. slice()
         - (start, [end])
         - returns a substring of the string based on the “start” and “end” index arguments.
      5. split()
         - converts a string into an array.
      6. trim()
         - returns a new string with removed white space from the start and end of the string.
      7. trimStart()
         - eturns a new string with removed white space from the start of the string.
      8. trimEnd()
         - returns a new string with removed white space from the end of the string.
      9. charAt()
         - Returns the character at the “x” position within the string.
      10. concat()
          - Combines one or more strings into the existing one and returns the combined string.
      11. toUpperCase()
      12. toLowerCase()
*/
let google = "Java and Javascript are not same !";
let google2 = "Ja va, and, Javascript, are, not, same !";

// 1. string.indexOf(substr, [start])
console.log("google.indexOf('a') -->" + google.indexOf('a'));
console.log(".indexOf start with 34 google.indexOf('a',34) -->" + google.indexOf('a', 34));//start with 34
console.log("indexOf indexOf -->" + google.indexOf('and'));
console.log("indexOf indexOf -->" + google.indexOf('java'));//not fount case sencetive

//2. string.lastIndexOf(substr, [end])
console.log("indexOf('a') -->" + google.lastIndexOf('e'));
console.log("indexOf('a') -->" + google.lastIndexOf('e', 34));

//3. string.replace(originalstr,newstr) 
console.log("replace('Java','angualr') -->" + google.replace('Java', 'Angualr'));
console.log("gobal repaces -replace(/Java/g,'angualr') -->" + google.replace(/Java/g, 'Angualr'));//gobal serach repalces
console.log("gobal repaces -replace(/Java/,'angualr') -->" + google.replace(/Java/, 'Angualr'));//  non gobal

//4. string.slice(start,[end])
console.log(google.length);

console.log("start and end slice(2,10) -->" + google.slice(2, 10));
console.log("startend slice(-4) -->" + google.slice(-4));
console.log("startend slice(-5,-6) -->" + google.slice(-6, -2));
console.log("start slice(4) -->" + google.slice(4));

//5. string. split() 
console.log("split(',') -->" + google2.split(','));
console.log("split('') -->" + google2.split(''));
console.log("split(' ') -->" + google2.split(' '));

//6.string.trim()
let google3 = "   javaScrpit and new lrean !     ";
console.log("trim() -->" + google3.trim());

//7.string.trimStart()
let google4 = "      hi        ";
// console.log("trimStart() --->" + google4.trimStart());

//8.string.trimEnd()
let google5 = "      hi        ";
// console.log("trimEnd() -->" + google5.trimEnd());

//9.string.charAt(x)
console.log("charAt(3) -->" + google3.charAt(3));

//10. string.concat()
let concatStr = 'abc';
console.log("concat(str, str1) -->" + concatStr.concat('WEEW', '......'));


//11.toLowerCase
console.log("toLowerCase-->" + google.toLowerCase());

//12.toUpperCase
console.log("toUpperCase-->" + google.toUpperCase());



