// 1. String Declaration

// let str1 = "Hello";
// let str2 = 'World';
// let str3 = `Template`;




// ✅ 2. String Properties
// 🔹 length  // Returns the length of a string.

// let name="vinay"
// // let name = "Vinay".length; // 5
// console.log(name.length)




// ✅ 3. Character Access
  
// 🔹 charAt(index)    // Returns the character at the given index.

// let name = "Bittu"
// let name1 = name.charAt(2)
//  console.log(name1)
// console.log(name.charAt(0))
// let str = "JavaScript".charAt(0); // "J"
// console.log(str)


// 🔹 charCodeAt(index)    //  Returns the Unicode of the character at the given index
// let str = "vinay";
// console.log(str.charCodeAt(1))
// "A".charCodeAt(0); // 65




// 🔹 at(index) (ES2022)  //Like charAt, but supports negative indexes.
// let str = "singh"
// console.log(str.at(-1))
// "Vinay".at(-1); // "y"





// ✅ 4. Extracting Parts of Strings


// 🔹 slice(start, end)   // Extracts a part of the string.
// let str = "vinaysingh"
// console.log(str.slice(0,5))

// "HelloWorld".slice(0, 5); // "Hello"

// 🔹 substring(start, end)

// let str = "radhakrishna"
// console.log(str.substring(11,5))
// "HelloWorld".substring(5); // "World"

// 🔹 substr(start, length) (deprecated)
// "JavaScript".substr(4, 6); // "Script"

// let str = "radha rani"
// console.log(str.substr(0, 5))







// ✅ 5. Changing Case
// 🔹 toUpperCase()  // Converts to uppercase.
// let str = "radhakrishna"
// console.log(str.toUpperCase())
// "vinay".toUpperCase(); // "VINAY"


// 🔹 toLowerCase()
// let str = "RADHAKRISHNA"
// console.log(str.toLowerCase())
// "KUMAR".toLowerCase(); // "kumar"




// ✅ 6. Removing Whitespaces
// 🔹 trim()
// let str = "radha krishna"
// console.log(str.trim())
// "  Hello  ".trim(); // "Hello"

// 🔹 trimStart() / trimEnd()
// let str = "vinay"
// console.log(str.trimStart())
// console.log(str.trimEnd())
// "  Hello  ".trimStart(); // "Hello  "






// ✅ 7. Searching in Strings
// 🔹 includes(substring)
// "JavaScript".includes("Script"); // true


// let str = "vinay singh"
// console.log(str.includes("vinay"))


// 🔹 startsWith(prefix)
// 🔹 endsWith(suffix)
// let str = "vinay singh"
// console.log(str.startsWith("vinay"))  // true
// console.log(str.endsWith("singh"))    // true

// console.log(str.startsWith("singh"))  // false
// console.log(str.endsWith("vinay"))    // false
// "Vinay".startsWith("Vi"); // true





// 🔹 indexOf(substring)    //Returns the index of the first/last match.
// let str = " radha krishna"
// console.log(str.indexOf("a"))
// "banana".indexOf("a"); // 1


// 🔹 lastIndexOf(substring)
// console.log(str.lastIndexOf("a"))
// "banana".lastIndexOf("a"); // 5





// ✅ 8. Replacing String Content

// 🔹 replace(search, value)
// let str = "vinay singh kumar"
// console.log(str.replace("vinay", "krishna"))

// let str = "ram is good "
// console.log(str.replace("ram", "krishna"))

// "Hello Vinay".replace("Vinay", "Kumar"); // "Hello Kumar"



// 🔹 replaceAll(search, value)
// let str = " 1,2,3,4,5,2,7,2,9"
// console.log(str.replaceAll("2", "11"))

// "1,2,3,2".replaceAll("2", "two"); // "1,two,3,two"





// ✅ 9. Splitting Strings
// 🔹 split(separator)   // Splits string into an array.

// let str = "apple, mango, lichi, banana, grapes,pineapple"
// console.log(str.split(","))

// let str = "1,2,3,4,5,6,7,8,9"
// console.log(str.split(","))

// "apple,banana,grape".split(","); // ["apple", "banana", "grape"]



// ✅ 10. Repeating Strings


// 🔹 repeat(count)

// let str = "Ram and Krishna"
// console.log(str.repeat(10))


// let str = "1"
// let str1 = " "  +  "1"
// console.log(str1.repeat(20))
// "Hi ".repeat(3); // "Hi Hi Hi "







// ✅ 11. Concatenating Strings
// 🔹 concat()

// let str = "vinay singh"
// let str1 = "singh is king"
// let sum = str+ " "  +str1
// console.log(sum.concat())


// "Hello".concat(" ", "Vinay"); // "Hello Vinay"

// 🔹 OR with + operator:


// "Hello" + " " + "World"; // "Hello World"




// ✅ 12. Padding Strings
// 🔹 padStart(length, pad)
// "5".padStart(3, "0"); // "005"

// 🔹 padEnd(length, pad)
// "5".padEnd(3, "0"); // "500"




// ✅ 13. Regular Expressions
// 🔹 match(regex)


// "abc123".match(/\d+/); // ["123"]

// 🔹 matchAll(regex)
// [... "test123test456".matchAll(/\d+/g)]; // ["123", "456"]

// 🔹 search(regex)

// ✅ 14. Comparing Strings
// 🔹 localeCompare()
// "A".localeCompare("B"); // -1





// ✅ 15. Unicode Normalization
// 🔹 normalize()
// "mañana".normalize(); // "mañana"




// ✅ 16. Converting to String
// 🔹 toString()

// let str = 123
// console.log( str.toString())

//     (123).toString(); // "123"

// 🔹 valueOf()



// let s = new String("Hello");
// s.valueOf(); // "Hello"




// ++++++++++++++++++++++++   QUESTION +++++++++++++++++++++++++++


// What is the output of "Vinay".length?
// let str = "vinay"
// console.log(str.length)

//Write a program to extract the first 4 characters from the string "JavaScript".

// let str = "javascript"
// console.log(str.slice(0,4))

//ow can you convert "hello" to "HELLO" using string methods?

// let str = "hello"
// console.log(str.toUpperCase())


// What does "Vinay".charAt(2) return?
// let str = "vinay"
// console.log(str.charAt(2)) //n  output

//Write a program to trim extra spaces from the string " Hello World ".

// let str = " Hello Words "
// console.log(str.trimStart())
// console.log(str.trimEnd())

//Use a method to check whether the string "developer" contains the substring "lop".

// let str = "developer"
// console.log(str.includes("lop"))

// and

// let str = "developer"
// let str1 = str.includes("lop")
// console.log(str1)


//How do you check if a string ends with "ing" in JavaScript?


// let str = "ing"


//Replace "AI" with "ML" in the string "Welcome to AI".

// let str = "welcome to AI"
// console.log(str.replace("AI","ML"))

//
// Convert "KUMAR" to lowercase using a method.

// let str = "KUMAR"
// console.log(str.toLowerCase())

// What is the result of "banana".indexOf("a")?
// let str = " banana"
// console.log(str.indexOf("a"))   //2





const { hello } = require("./prectice");//  one file to another file access ----  practice.js
hello();   




