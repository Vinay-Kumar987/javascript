/* 
set -- It contains only uniqie values
Objects construtor


set --  A set is a collection of value (no duplicates allowed). it can strore any type of value: primitive or objects




Method	             Description

new Set()	         Creates a new Set
add()	              Adds a new element to the Set
clear()	              Removes all elements from a Set
delete()	           Removes an element from a Set
entries()	           Returns an Iterator with the 
                       [value,value]  pairs from a Set

forEach()	          Invokes a callback for each element
has()	               Returns true if a value exists
keys()	               Same as values()
values()	           Returns an Iterator with the values in a Set  



*/
// +++++++++++++ new Set +++++++++++
/*
const num = new Set();
num.add(1);
num.add(2);
num.add(3);
num.add(4);
num.add(4);
console.log(num)


// ++++++++++++++++++++  add() +++++++++++

const str = new Set();
str.add("a");
str.add("b");
str.add("a");
str.add("c");
str.add("d");
str.add("a");
str.add("a");
console.log(str)


// +++++++++++++++++++  clear()   +++++++++++++++++++++
const arr = new Set(["a", "b", "c", "d"])
 arr.clear()
console.log(arr)


const arr1 = new Set([1, 2, 3, 4, 5]);
arr1.clear()
console.log(arr1)
*/

// ++++++++++++++++++ delete () ++++++++++++++++++++++++++

// const vinay = new Set(["a", "v", "b","c", "d"])
// vinay.delete("v");
// console.log(vinay);
 



// ++++++++++++++++++++ entries ()entries() method एक iterator object देता है जिसमें [key, value] जोड़े होते हैं। ++++++++++++++++++++++

// const letters = new Set(["a", "b", "c"])
// const iterator = letters.entries();
// for (let entry of iterator) {
//     console.log(entry)
// }



// +++++++++++++++++++ forEach ()  forEach() method हर एक item पर एक function को एक बार चलाता है (Array, Set, या Map में).


// array forEach
// const numbers = [1, 2, 3]
// numbers.forEach(function (num, index) {
//     console.log(`Index:   ${index}, value: ${num}`   )
// })



// set forEach
// const mySet = ([10, 20, 30, 40])
// mySet.forEach((value) => {
//     console.log(`value: ${value} `)
//     // console.log(value)
// })


// ++++++++++++++++++++  Has () +++++++++++




// const arr = new Set(["a", "b", "c"])
//  const arr1 = arr.has("r")
// console.log(arr1)



// +++++++++++++++++++++++++    size()  ++++++++++++++++

// const letters = new Set(["a", "b", "c"])
// const x = letters.size
// console.log(x)



















// +++++++++++++++++++++++++++++++++++++    MAP      +++++++++++++++++++++++++++++

/*   A Map is a collection of key-value pairs where keys can be any type (not just strings like in objects). */

/*

new Map()	          Creates a new Map object
clear()	               Removes all the elements from a Map
delete()	            Removes a Map element specified by a key
entries()	            Returns an iterator object with the    
                      [key,value] pairs in a Map
                      
forEach()	          Invokes a callback for each key/value pair in
                       a Map
get()              	Gets the value for a key in a Map
groupBy()	          Groups object elements according to returned
                       callback values
has()	                  Returns true if a key exists in a Map
keys()	                Returns an iterator object with the keys in
                     a Map
set()	                Sets the value for a key in a Map
size	              Returns the number of Map elements
values()	            Returns an iterator object of the values in
                       a Map

*/


// const data = new Map([
//     ["name", "vinay"],
//     ["Age:", 23],
//     ["city:","delhi"]
// ])
// console.log(data)



// new map +++++++++++++++++++++++

// const myMap = new Map();
// myMap.set("name", "vinay");
// myMap.set("Age", 23)
// console.log(myMap)



// const myData = new Map();
// myData.set("name", "vinay");
// myData.set("age",23)
// myData.set("what are your classification", "Graduate")
// myData.set("which Branch","Btech-AIML")
// myData.set("how many marks your btech", "63%")
// myData.set("Your Roll nUmber", 121)
// console.log(myData)



// ==================    clear  ===================



// const myData = new Map();
// myData.set("name", "vinay");
// myData.set("age",23)
// myData.set("what are your classification", "Graduate")
// myData.set("which Branch","Btech-AIML")
// myData.set("how many marks your btech", "63%")
// myData.set("Your Roll nUmber", 121)
// myData.clear();
// console.log(myData)



// ==========================  get (key)  ============

// const data = new Map()
// data.set("name", "vinay")
// data.set("age", 22)
// data.set("branch","AIML")
// console.log(data.get("branch"))


// ====================    has ++++++++++++++++++++++/


// const a = new Map()
// a.set("a",1)
// a.set("b",2)
// a.set("c",3)
// a.set("d", 5)
// console.log(a.has("b"))
// console.log(a.has("d"))
// console.log(a.has("e"))


// ================================  delete()    ====================


// const b = new Map()
// b.set("a","ameri")
// b.set("b","ball")
// b.set("c","cap")
// b.set("d", "Duration")
// b.delete("a")
// console.log(b)


// ===================  size ==============


// const c = new Map([
//     ["a", 1],
//     ["b", 2],
//     ["c", 3],
//     ["af", 1],
//     ["e", 2],
//     ["cs", 3],
//     ["f", 15],
//     ["aa", 72],
//     ["i",39],
// ])

// console.log(c.size)


// const arr = new Map([
//     ["name", "Adarsh"],
//     ["Age", 9],
//     ["school", "NGCS"]
// ])
//  let arr1 = arr.delete("name")
// console.log(arr1)
// console.log(arr)


// ==========================/

const arr = new Map([
    ["name", "adarsh"],
    ["Age", 6],
    ["Email", "vinay.de94@gmail.com"]
]);
arr.forEach((value, key)=>{
    console.log(key,value)
})



