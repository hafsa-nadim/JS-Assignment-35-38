
//                               Question: 1
     
//    function tellTime() {
 //   var now = new Date();
//    var theHr = now.getHours();
//    var theMin = now.getMinutes();
 //   var thesec =now.getSeconds();
//     alert(now);
//        }
 //    tellTime() ;

//                               Question: 2

// function greets() {
//  var firstName = prompt("Enter your first name");
//   var lastName = prompt("Enter your last name");
//   alert("Good Morning, " + firstName + " " + lastName);
// }
// greets();
 
//                                Question: 3

//  function calculate() {
//   var number1 = +prompt("Enter your first number");
//   var number2 = +prompt("Enter your 2nd number");
//   return number1 + number2;
// }
// alert("The sum of two numbers is: " + calculate());

//                                Question: 4

//  function calculator() {
//   var num1 = +prompt("Enter your first number");
//   var num2 = +prompt("Enter your 2nd number");
//   var num3 = prompt("Enter operator for operation: ");

//     switch (num3) {
//         case "+":
//             return num1 + num2;
//             break;
//         case "-":
//             return num1 - num2;
//             break;
//         case "*":
//             return num1 * num2;
//             break;
//         case "/":
//             return num1 / num2;
//             break;
//         case "%":
//             return num1 % num2;
//             break;
//         default:
//             return "Enter valid operator like: +,-,*,/,%";
//     }
// }
// alert("Desired result is: " + calculator());

//                                   Question: 5

// function squares(num) {
//  return "The squares of given number is: " + num * num;
// }
// alert(squares(9));

//                                    Question: 6

// function factorial() {
//     var number = +prompt("Enter a number to compute the factorial");
//     var result = number;
//     for (var i = number; i > 1; i--) {
//       result = result * (i - 1);
//       console.log(result);
//     }
//     alert("The Factorial of number is " + result);
// }
// factorial();

//                                     Question: 7

// function count(start, end) {
//     for (var i = start; i <= end; i++) {
//      console.log(i);
//     }
// }
// count(1, 20);
             
//                                    Question: 8

// function Hypotenuse() {
//     var base = +prompt("enter base value of right angle triangle");
//     var perpendicular = +prompt("enter perpendicular value of right angle triangle");
//     function square(num) {
//      return num * num;
//     }
//     return "Hypotenuse of a right angle triangle is: " + (square(base) + square(perpendicular));
// }
// alert(Hypotenuse());
 
 //                                   Question: 9

// function area(width, height) {
//     alert("Area of rectangle is: " + (width * height));
// }
// var height = 36;
// area(28, height);

//                                   Question: 10

// function Palindrome() {
//     var palindrome = prompt("Please enter a palindrome", "sir");
//     palindrome = palindrome.toLowerCase();
//     var reverse = palindrome.split('').reverse().join('');
//     console.log(reverse);
//     if (reverse === palindrome) {
//         return "The given string " + palindrome + " is a palindrome.";
//     }
//     else {
//         return "The given string " + palindrome + " is not a palindrome.";
//     }
// }
// alert(Palindrome());

//                                   Question: 11

// function capatalString(string) {
//     var words = string.split(" ");
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }
// alert(capatalString("the quick brown fox"));

//                                    Question: 12

// function longestWord(string) {
//     var words = string.split(" ");
//     var maxLength = words[0];
//     for (var i = 0; i < words.length - 1; i++) {
//        if (words[i].length < words[i + 1].length) {
//           maxLength = words[i + 1];
//         }
//     }
//     if (words[words.length - 1].length > maxLength.length) {
//         maxLength = words[words.length - 1];
//     }
//     return maxLength;
// }
// alert(longestWord("Web Development tutorial"));

 //                                   Question: 13

// function sample(num1, num2) {
//     var num1 = num1.toLowerCase();
//     var count = 0;
//     for (var i = 0; i < num1.length; i++) {
//         if (num1.charAt(i) === num2) {
//             ++count;
//         }
//     }
//     return "The occurrence of the specified letter " + num2 + " is " + count;
// }
// alert(sample("Hafsa Nadeem", "a"));

//                                        Question: 14

// function calcCircumference(r) {
//   var π = 3.14159265;
//     return "Circumference of circle: " + 2 * π * r;
// }
// alert(calcCircumference(5.67));
// function calcArea(r) {
//     var π = 3.14159265;
//     return "Area of circle: " + π * r * r;
// }
// alert(calcArea(5.67));




