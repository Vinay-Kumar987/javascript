// 1.Print numbers from 1 to 10 using a for loop
// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// const e = require("express")

// 2. Print numbers from 1 to 10 using a while loop.
// let num = 1;
// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// 3.print number from 10 to 100 using a while loop

// i = 10;
// while (i <= 100) {
//     console.log(i);
//     i++;
// }

// 4.print even number between   1 and 20


// for (let i = 1; i <= 20; i++){
//     if (i%2  == 0) {
//         console.log(i);
//     }
// }
// or
for (let i = 1; i<= 100; i++){
    if (i % 2 !== 0) {
        console.log("Odd number",i)
    }
}

// for (let i = 2; i <= 20; i += 2){
//     console.log(i)
// }
// for (let i = 1; i <= 20; i++){
//     if (i % 2 !== 0) {
//         console.log("There are odd number: ", i);
//     }
// }

// or

// for (let i = 1; i <= 20; i += 2){
//     console.log("Odd number: ",i)
// }

// 5. print the multiplication table of 5.

// for (let i = 5; i <= 50; i++){
//     if (i % 5 == 0) {
//         console.log("table of 5:", i);
//     }
// }

// 6. find the sum of number from  1 to 100.
// {
//     let sum = 0;
//     for (let i = 1; i <= 100; i++) {
//         sum += i;
//     }
//     console.log("sum of number 1 to 100:", sum);
// }

// let n = 100;
// let sum = n * (n + 1) / 2;
// console.log("sum of number:", sum);

// {
//     let sum = 0;
//     for (let i = 1; i <= 100; i++){
//         sum += i;
//     }
//     console.log("sum of number 1 to 100:",sum)
// }

// find the factorial of a number 5!

// let num = 5;
// let result = 1;
// if (num < 0) {
//     console.log("factorail not defined for negative number");
// } else {
//     for (let i = 1; i <= num; i++){
//         result *= i;
//     }
//     console.log("facotial of " + num + " is " + result)
// }



// print the reverse of a string  (vinay)

// {
// let myname = "vinaysingh";
// let mylen = myname.length;
// for (let i = mylen - 1; i >= 0; i--){
//     console.log(myname[i])
// }



// let myname = "singh";
// let mylen = myname.length;
// reverse = "";
// for (let i = mylen - 1; i >= 0; i--){
//     reverse += myname[i] + " ";
// }
// console.log(reverse.trim());
// let myname = "vinay";
// let mylen = myname.length;
// for (let i = mylen - 1; i >= 0; i--){
//     console.log(myname[i])5
// }



// Write a program to check if a number is even or odd.=========================

// let num = parseInt(prompt("enter number"))
// // for (let i = 0; i <= 10; i++){

//     if (num % 2 == 0) {
//         console.log("even", num)
//     } else {
//         console.log("odd",num)
//     }


// Reverse a string in JavaScript.======================
//  for loop

// let str = "singh"
// let strLen = str.length;
// let reverse = "";
// for (let i = strLen-1; i >= 0; i--){
//     reverse += str[i]
// }
// console.log(reverse)


// let str = "vinay";
// let i = str.length-1;
// let reverse = "";
// while (i >= 0) {
//     reverse += str[i]
//     i--;
// }
// console.log(reverse)


// Find the largest number in an array.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15]
// let arr1 = Math.max(...arr)
// console.log(arr1)

// Find the smallest number in an array.

// let arr = [12, 23, 4, 4, 23, 53, 55, 11, 33, 77, 1]
// let small = Math.max(...arr)
// console.log(small)


// let arr1 = [12, 23, 4, 4, 23, 53, 55, 11, 33, 77, 1]



// exports.hello=function hello() {
    

//     console.log("hello vinay");


// }