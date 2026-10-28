// Write a program to check if the first three characters in
// the two given strings are the same.


let word1 = prompt("Enter the first word:");
let word2 = prompt("Enter the second word:");

console.log(word1.slice(0,3) === word2.slice(0,3));