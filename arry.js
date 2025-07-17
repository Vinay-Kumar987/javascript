// array is linear DS which stores multiple value in a contoneous memory

// Basic JavaScript String Questions
// How do you create a string in JavaScript?


// let name = "Vinay";
// How to find the length of a string?


// let str = "Hello";
// console.log(str.length); // Output: 5
// How to convert a string to uppercase?


// let str = "hello";
// console.log(str.toUpperCase()); // Output: "HELLO"
// How to convert a string to lowercase?


// let str = "HELLO";
// console.log(str.toLowerCase()); // Output: "hello"
// How to extract a substring from a string using slice()?


// let str = "JavaScript";
// console.log(str.slice(0, 4)); // Output: "Java"
// How to replace part of a string?


// let str = "I like cats";
// console.log(str.replace("cats", "dogs")); // Output: "I like dogs"
// How to check if a string includes a certain word?


// let str = "JavaScript is fun";
// console.log(str.includes("fun")); // Output: true
// How to split a string into an array?


// let str = "apple,banana,grape";
// let fruits = str.split(",");
// console.log(fruits); // Output: ["apple", "banana", "grape"]
// How to trim spaces from both sides of a string?


// let str = "  Hello World  ";
// console.log(str.trim()); // Output: "Hello World"
// How to get the character at a specific index?


// let str = "JavaScript";
// console.log(str.charAt(2)); // Output: "v"

// integer to string convert

// let num = 1234;
// let str = String(num)
// console.log(typeof str)

// let num = 1000;
// let str = num.toString()
// console.log( str)
// console.log( typeof str)



// let fruits = ["apple", "banana", "grapes", "mango"]
// let veg = ["patoto", "tomato", "finger", "bring"]
// // let mix_veg_fruits = fruits.concatf (veg)
// let mix_veg_fruits = [...fruits, ...veg]
// console.log(mix_veg_fruits);


// let old_array =[1,2,3,4,5,[6,7,8,9,[12,11,12,13]]]
// let new_array = old_array.flat(Infinity)
// console.log(new_array)



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++= Array method   +++++++++++++++++++++++++++++++++++++++++++++++++

// Summary Table of Array Methods

// Method	Use

// push()	Add at end
// pop()	Remove from end
// unshift()	Add at beginning
// shift()	Remove from beginning
// concat()	Merge arrays
// spread syntax [...] (ES6)  Combines arrays using the spread operator (clean, modern way).
// slice()	Get portion
// splice()	Add/remove
// map()	Transform all items
// filter()	Filter items
// reduce()	Accumulate to single value
// find()	Find first match
// indexOf()	Get first index
// includes()	Check existence
// sort()	Sort array
// reverse()	Reverse array
// flat()	Flatten nested arrays
// join()	Join to string
// toString()	Convert to string
// every()	All elements pass
// some()	Any element passes
// fill()	Fill values
// forEach()	Loop through array
// isArray()	Check if array
// from()	Create from string/iterable
// of()	Create from values
// at()	Access by index (supports negative)

// ---------------------------------------------++++++++++  practice question   +++++++++++++-------------------------------------

// let arr = [1, 2, 3, 4]
// arr.push(5, 6, 7, 8)
// arr.pop()
// console.log(arr)


// let arr = [1, 2, 3, 4]
// arr.unshift(1)
// console.log(arr)

// let num = [1, 2, 3, 4, 5, 6]
// num.shift()
// num.unshift(0)
// console.log( num)


// let arr = [1, 2, 3, 4]
// let arr2 = [5, 6, 7, 8]
// // let add = arr.concat(arr2)
// let add =[...arr, ...arr2]
// console.log(add)

// let num = [1, 2, 3, 4, 5]
// let num1=num.slice(3,5)
// console.log(num1)


// let str = ["v","i","n","a","y","s","i","n","g","h"]
// // console.log(str.slice(5, 10));
// let str1 = str.slice(5, 10)
// // let str1 = str.splice(1,3)
// console.log(str1)


// let number = [1, 2, 3, 4]
// let double = number.map(num => num * 2)
// console.log(double);


// let number = [1, 2, 3, 4, 5];
// let double = number.map(function (num) {
//     return num * 2;
// })
// console.log(double)

// let num = [4, 5, 6, 7, 8]
// let double = num.map(function (x) {
//     return x * 5;
// })
// console.log(double)


// let fruits = ["apple", "mango", "banana"];
// let upperFruits = fruits.map(x => x.toUpperCase())
// console.log(upperFruits)


// let num = [1, 2, 3, 4]
// let double = num.map(x => x * 10)
// console.log(double)

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let even = num.filter(x => x % 2 ===0);
// console.log(even)


// let num = [2, 3, 4, 12, 13, 14, 15, 20, 30]
// let odd = num.filter(x => x % 2 !==0);
// console.log(odd)
 

// let num = [12, 3, 43, 1, 111, 2, 54, 43, 4, 13, 363, 15]
// num.sort((a, b) => a - b);
// console.log(num)


// let arr = [100, 2, 99, 43, 43, 565, 677, 6, 76, 99, 7, 1]
// arr.sort((a, b) => a - b);
// console.log(arr)

// let num = [1, 2, 3, 4, 5, 6, 7];
// num.reverse();
// console.log(num)


// let arr = ["a", "b", "c"]
// console.log(arr.join("+"));


// let str = [1, 2, 3, 45, 56]
// let arr = str.toString();
// console.log(typeof arr)

// let arr = [1, 2, 3, 4]
// arr.fill(0, 1, 3);
// console.log(arr)

// let arr = [3, 4, [4, 43, [34, [40]]]]
// console.log(arr.flat((1)))

// let arr = [12, 13, 14, 15]
// console.log(arr.at(-2))


// console.log(Array.isArray([1, 2, 3]))
// console.log(Array.isArray(["hello","how"]))

// let num = [1, 2, 3, 4, 5, 6]
// let str = ["as"]
// console.log(Array.isArray(num))
// console.log(Array.isArray(str))


// let str = "hello";
// console.log(Array.from(str));


// let str = "hello"
// console.log(str.split(""))



// let num = [1, 23, 45, 6, 6, 88, 6, 43, 2, 100, 12, 10, 77, 34, 64 ];
// num.sort((a, b) => a - b);
// console.log(num)

// +++++++++++++      push          ++++++++++++++++++

// let num = [1, 2, 3, 4, 5, 6, 7]
// num.push(8)
// console.log(num)


// ++++++++++++++++++      pop  ++++++++++++++++++++++++++++++


// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr.pop()
// console.log(arr)


// ++++++++++++++++++++++++++         unshift  ++++++++++++++++++++++++++

// let arr = [1, 2, 3, 4, 5, 6, 7]
// arr.unshift(0)
//  console.log(arr)


// ++++++++++++++++++++++++    shift     ++++++++++++++++++


// let arr = [1, 2, 3, 4, 5, 6, 7]
// arr.shift()
// console.log(arr)
 


// ++++++++++++++++++++++++++++            concat                     ++++++++++++++++++++++++++++++++++



// let arr = ["hi", "how", "are", "you"]
// let arr1 = ["i", "am ", "good", "and you"]
// let con_Cat = arr.concat(arr1);
// console.log(con_Cat)



// +++++++++++++++++++++++++++++++++++++++++++   and spread         ++++++++++++++++++++++++++++++++=



// let arr = ["hi", "how", "are", "you"]
// let arr1 = ["i", "am ", "good", "and you"]
// let spread = [...arr, ...arr1]
// console.log(spread)


// +++++++++++++++++++++++++++++++          slice             ++++++++++++++++++++++++++
// let arr = [1, 2, 3, 4, 5, 6, 7]
// let arr1= arr.slice(1,4)
// console.log(arr1)

// let str = ["vinaysingh","v","s","f","r"]
// let str1=str.slice(1)
// console.log(str1)



// ++++++++++++++++++++++++++++++++++++++          splice            ++++++++++++++++++++++++++++++

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// arr1.splice(3)
// console.log(arr1)


// and

// let arr = ["javascript","a","v","i","k"];
// arr.splice(5);
// console.log(arr)


// ++++++++++++++++     map              +++++++++++++++++++++++++++++++

// let arr = [1, 2, 3, 4]
// let arr1 = arr.map(num => num * 2)
//  console.log(arr1)

// ++++++++++++++++++++++++  filter            +++++++++++++++++++++++++

// let arr = [1, 2, 3, 4, 56]
// let arr1 = arr.filter(num => num % 2 ===0)
// console.log(arr1)


// +++++++++++++++++++++++++++++++++=        Reduce              +++++++++++++++++++++++++++


// let arr = [1, 2, 3, 4, 5, 6, 7]
// let sum=arr.reduce((a,b)=> a+b)
// console.log(sum)



// ++++++++++++++++++++++++++++++++ indexof      ++++++++++++++++++++++++++++

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arr.indexOf(3));


// +++++++++++++++++++++++     inculdes                ++++++++++++++++++++++++++

// let arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr.includes(1))


// ++++++++++++++++++++++++++++++++=        sort              ++++++++++++++++++++++++++++


// let arr = [1, 20, 3, 4, 30, 14, 4, 6, 20]
// arr.sort((a,b)=>a-b)
// console.log(arr)


// or

// let arr = [1, 2, 3, 4, 6, 7, 7, 8, 8, 43, 23, 54, 65, 34, 66666, 1000]
//  arr.sort((a,b)=>a-b)
// console.log(arr)



// +++++++++++++++++++++++++++++++++=============          reverse  ++++++++++++++++++++++++++++++++++++

// let arr = [2, 3, 4, 6, 7, 78, 11, 23, 45]
// arr.reverse();
// console.log(arr)



// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 40, 23, 112, 22, 20]
// arr.sort((a,b)=>a-b)
// let reversedArr = [];
// for (let i = arr.length - 1; i >= 0; i--){
//     reversedArr.push(arr[i])
    
// }
// console.log(reversedArr)
// ++++++++++++++++++++++++++++++++++++++++    flat                 ++++++++++++++++++++++++++++++++


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,[[1,2,[3,[3],],4,5], 1, 12, 13, [14], 15, 16, [17], 18, [18], 20]]
// let flatArr=arr.flat(Infinity)
// console.log(flatArr)

// +++++++++++++++++++++++++++++++++++=  join          ++++++++++++++++++++
// let arr = ["ankit", "singh"]
// console.log(arr.join(' '))
     




//  +++++++++++++++++++++++++++ practice question+++++++++++++++++
    
// Create an array of numbers and print it.

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(num)

// Add an element at the end using push().

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr.push(9)
// console.log(arr)

// Remove the last element using pop().

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr.pop()
// console.log(arr)

// Add an element at the beginning using unshift().
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr.unshift(0)
// console.log(arr)

// Remove the first element using shift().
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr.shift()
// console.log(arr)


// Find the length of an array.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let arrArray = arr.length;
// console.log(arrArray)

// Access the third element of an array.

// let arr = [1, 2, 3, 4, 5, 6, 7];
// // let arr1 = arr[3]
// // console.log(arr1)
// console.log(arr[3])

// Replace the second element in an array with a new value.

// let arr = [1, 5, 3, 4, 5, 6, 7, 8, 9];
// arr[1] = 2;
// console.log(arr);

// heck if an element exists in an array using includes().

// let arr = [1, 2, 3, 4, 5, 6, 7, 7, 8]
// console.log(arr.includes(10))


// Use slice() to get a subarray from an array.

// let arr = [1, 2, 3, 4, 5, 6, 7]
// let arr1 = arr.slice(3,7)

// console.log(arr1)
// console.log(arr)


// Use splice() to remove 2 elements from index 1.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let removed = arr.splice(1, 2)
// console.log("remove: ", removed)
// console.log("update array:",arr)

// Use splice() to add 2 elements at index 3.


// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
//   arr.splice(3, 0, 10, 12)
// console.log(arr)


// Use splice() to replace an element at a specific index.

// let arr = [1, 2, 3, 4, 5, 6, 7]
// arr.splice(3, 1, 100)
// console.log(arr)



// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr.splice(5,1,200)
// console.log(arr)

// Use slice() to copy the entire array

// let arr = [1, 2, 3, 4, 5, 6, 7]
// let copyEntire = arr.slice()
// console.log(copyEntire)

// Use forEach() to print each element of an array.

// let arr = [1, 2, 3, 4, 5, 6, 8]

// arr.forEach(function (element) {
//     console.log(element)
// });

// arr.forEach((element) => {
//     console.log(element)
// })



// let num = [10, 20, 30, 40, 50, 60, 70]
// num.forEach(function (element) {
//     console.log(element)
// })


// num.forEach((element) => {
//     console.log(element)
// })


// Use map() to double every element of an array.


// let arr = [10, 20, 30, 40, 50, 60]
// let double = arr.map(x => x * 2)
// console.log(double)


// Use map() to convert array of strings to uppercase.

// let arr = ["vinay", "amit", "ankit", "radhe"]
// let upperArr = arr.map(x=>x.toUpperCase())
// console.log(upperArr)



// lowerCase



// let arr = ['VINAY', 'AMIT', 'ANKIT', 'RADHE']
// let lowerArr = arr.map(x => x.toLowerCase())
// console.log(lowerArr)


// Use map() to square each number in an array.


// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let squareArr = arr.map(x => x * x)
// console.log(squareArr)


// Use forEach() to add 5 to each element and print.

// let arr = [10, 20, 30, 40, 50]
// // arr.forEach(function (num) {
// //     console.log(num +5)
// // })

// arr.forEach((num) => {
//     console.log(num + 5)
// })


//  Searching and Filtering – filter(), find()



// Use filter() to find even numbers in an array.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // let even = arr.filter(x =>x % 2 == 0)
// let odd = arr.filter(x => x % 2 !== 0)
// console.log(odd)
// // console.log(even)

// Use filter() to find numbers greater than 10.

// let arr = [12, 12, 1, 2, 3, 4, 5, 6, 65, 32, 50]
// let greaterNum = arr.filter(x => x > 10)
// console.log(greaterNum)




// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 1, 2, 3, 4, 5, 22, 6, 7, 8, 33, 9, 0, 8]
 
// let greArr = arr.filter(num => num > 10)
// console.log(greArr)



// Use filter() to get strings longer than 4 characters.

// let arr = ["vinay", "ram", "moha", "raka", "amit", "singh"]
// let longer = arr.filter(str => str.length > 4)
// console.log(longer)


// Use find() to get the first even number.


// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let evenArr = arr.find(x => x % 2 === 0)
// console.log(evenArr)

// Use find() to get the first number greater than 50.
// let arr = [12, 11, 234, 44, 32, 50, 60, 85, 40]
// let greater = arr.find(x => x > 50)
// console.log(greater)

// Use reduce() to find the sum of all elements.
// let numbers = [10, 20, 30, 40, 10,50]
// let sum = numbers.reduce(function (a, b) {
//     return a + b;
// })
// console.log(sum)

// let sum = numbers.reduce((a, b) => a + b);
// console.log(sum)


// let sum = numbers.reduce(function (a, b) {
//     return a+b
// })
// console.log(sum)


// let sum = numbers.reduce((a, b) => a + b);
// console.log(sum)


// let sum = numbers.reduce(function (a, b) {
//     return a + b;
// })
// console.log(sum)
// let sum = numbers.reduce((a, b) => a + b);

// console.log(sum)


// Use reduce() to find the product of all numbers.
// let arr = [1, 2, 3, 4, 5]
// let product = arr.reduce(function (a, b) {
//     return a*b
// })
// console.log(product)


// se flat() to flatten a nested array by 1 level.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, [12, [23], 44], [10], 30]
// let nested = arr.flat(Infinity)
// console.log(nested)


// let arr = [1, 8, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// // let arr1 = arr.splice(4, 10)
// let arr1 = arr.filter(x => x < 4)
// console.log(arr1)



// function countGoodWellPrefixes(S) {
//     let count = 0;

//     for (let i = 2; i <= S.length; i += 2) {
//         let prefix = S.slice(0, i);
//         let half = i / 2;

//         let firstHalf = prefix.slice(0, half);
//         let secondHalf = prefix.slice(half);

//         if (firstHalf === secondHalf) {
//             count++;
//         }
//     }

//     console.log(count);
// }

// // Read input using readline for Node.js
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = '';
// rl.on('line', function (line) {
//     input = line.trim();
//     rl.close();
// });

// rl.on('close', function () {
//     countGoodWellPrefixes(input);
// });
