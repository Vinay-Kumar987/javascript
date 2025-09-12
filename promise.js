// promise

// let promise = new Promise(function (resolve, reject) {
//     let success = true;
//     if (success) {
//         resolve("task is completed successfull")
//     } else {
//         reject("task fails.")
//     }
// })
// promise
//     .then(function (result) {
//     console.log("success:", result)
// })
//     .catch(function (error) {
//     console.log("Error:", error)
//     })

// let pro1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let success = false
//         if (success) {
//             resolve("this code ia loading")
//         } else {
//             reject("this is not loading")
//         }
//     },2000)
// })
// pro1
//     .then(function(result){
//         console.log("success:",result)
//     })
//     .catch(function (error) {
//        console.log("Error:",error)
//     })



// const promi = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         // let error = false;
//         let success = true;
//         if (success) {
//             resolve({username: "radha krishna", password: "radha@108"})
//         } else {
//             reject("Error: someting is wrong.")
//         }
//     },2000)
// })
// promi.then((user) => {
//     console.log(user)
//     return user.username
// })
//     .then((username) => {
//     console.log(username)
//     })
//     .catch((error) => {
//     console.log(error)
// })


//  ++++++++++++++++++++++++++++++  await asyn

// function login() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let success = true;
//             if (success) {
//                 console.log("you can login.")
//                 resolve()
//             } else {
//                 reject("you can't login.")
//             }
//         },2000)
//     })
// }
// function getuser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let pass = false;
//             if (pass) {
//                 console.log("Get user profile")
//                 resolve()
//             } else {
//                 reject("not get user profile.")
//             }
//         },2000)
//     })
// }
// async function complete() {
//     try {
//         await login();
//         await getuser();
//     }
//     catch (error){
//         console.log("Error:",error)
//     }
// }
// complete();


//+++++++++++++++++++++++++++++++++ Delay Function  +++++++++++++++++++++++++++++++=

// एक waitForTwoSeconds() नाम की async function बनाइए जो 2 सेकंड बाद "Done waiting!" return करे।
// 👉 Hint: setTimeout + Promise का इस्तेमाल करें और await से call करें।


// function promise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Done waiting!")
//             resolve()
//         }, 2000)
//     })
// }
// async function pro() {
//     await promise();
// }
// pro()



// 2. Fetch User Data

// Create two functions:

// getUser() → waits 1 second and returns "User Found".

// getProfile() → waits 2 seconds and returns "Profile Loaded".
// Call both using await inside one async function.

// function getUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("User Found")
//             resolve()
//         },1000)
//     })
// }
// function getProfile() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Profile loaded.")
//             resolve()
//         },2000)
//     })
// }
// async function get() {
//     await getUser();
//     await getProfile();
// }
// get()


// 3. Error Handling with try...catch

// Make a function fetchData(success) that returns a promise:

// If success = true, resolve "Data Fetched".

// If success = false, reject "Data Failed".
// Call it with await and handle error using try...catch.


// function get() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let success = true;
//             if (success) {
//             resolve("data fatch.")
//             }
//             else {
//                 reject("Data failed.")
//             }
//         },1000)
//     })
// }
// async function data() {
//     try {
//         let success = await get()
//         console.log("we have completed successfull: ",success)
//     }
//     catch (error) {
//         console.log("Error:", error)
//     }
// }
// data()

// 4. Sequential vs Parallel

// Write two promises:

// task1() → waits 2 seconds.

// task2() → waits 2 seconds.
// Call them sequentially with await and then in parallel with Promise.all(). Compare execution time.

// function login() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("successfully login")
//            resolve()
//         },2000)
//     })
// }
// function getId() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("getId create successfull")
//             resolve()
//         },2000)
//     })
// }
// async function repo() {
//     await login()
//     await getId()
// }
// repo()

// 5. API Simulation

// Create a fake API call function getPosts() that returns posts after 3 seconds.
// Use await in another async function to call getPosts() and print "Posts Received"

// function getPosts() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            resolve(["poste1","post2","post3"])
//         },3000)
//     })
// }
// async function fatchPosts() {
//     console.log("faching data...")
//     let posts = await getPosts()
//     console.log("fatch data: ", posts)
// }
// fatchPosts()


// ++++++++++++++++++++++++++++     Beginner (1–7)                  ++++++++++++++++++++++++++++++

//1.  Write an async function sayHello() that returns "Hello World" after 2 seconds using await.
// function sayHello() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Hello words...")
//             resolve()
//         },2000)
//     })
// }
// async function get() {
//     await sayHello()
// }
// get()



//2.  Create a function delayedMessage(msg, delay) that prints a message after given seconds using await.

// function msg() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("hi how are you?")
//             resolve()
//         },2000)
//     })
// }
// function delay() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Thank you for ask my  introduce,,   i am very good, and you.")
//             resolve()
//         },2000)
//     })
// }
// async function fatch() {
//     await msg()
//     await delay()
// }
// fatch()

//3.  Make a promise function isEven(num) that resolves if number is even, rejects if odd. Handle with await.
// function isEven(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num % 2===0) {
//               resolve(`${num} is even number.`)
//             } else {
//                 reject(`${num} is odd.`)
//             }
//        },1000)
//     })
// }
// async function number(num) {
//     try {
//         let result = await isEven(num)
//         console.log("Results:", result)
//     }
//     catch (error) {
//         console.log("This is", error)
//     }
// }
// number(10)
// number(3)
// number(11)
// number(50)



// function demo(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num % 2 === 0) {
//                 resolve(`${num} is even number`)
//             } else {
//                 reject(`${num} is odd number`)
//             }
//         },2000)
//     })
// }
// async function know(num) {
//     try {
//         let result = await demo(num)
//         console.log("Ressult", result)
//     }
//     catch (error) {
//         console.log("This is", error)
//     }
// }
// know(12)
// know(11)
// know(7)
// know(8)

// Write an async function to simulate logging in: return "Login Success" if success = true, else reject.
// function login() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let success = true;
//             if (success) {
//                 // console.log("Login success")
//                 resolve("Login success")
//             } else {
//                 reject("fails")
//             }
//         },1000)
//     })
// }
// async function get() {
//     try {
//         let result = await login()
//         console.log("Result:",result)
//     }
//     catch(error){
//           console.log("Error", error)
//     }
// }
// get()



// Create fetchData() that simulates data fetching (3 sec delay). Print "Data Received" after awaiting it.
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data Received")
        },3000)
    })
}
// async function demo() {
//     try {
//         let result = await fetchData()
//         console.log("Result:",result)
//     } catch(error) {
//         console.log(error)
//     }
// }
// demo()
// Write an async function to call two promises sequentially and print their results.
// function first() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("First task complete.")
//         },2000)
//     })
// }
// function second() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Second task complete")
//         },1500)
//     })
// }
// async function squ() {
//     let result = await first()
//     console.log(result)
//     let result2 = await second()
//     console.log(result2)
// }
// squ()


// Write an async function to call two promises in parallel using Promise.all() and await.
// function data (){
//     return new Promise((resolve) => {
//         resolve("hello how are you")
//     })
// }
// function data2() {
//     return new Promise((resolve) => {
//         resolve( "i am good, and you")
//     })

// }
// async function add() {
//     let result = await data()
//     console.log(result)
//     let output = await data2()
//     console.log(output)
// }
// add()


// ++++++++++++++++++++++++++++++++    Intermediate (8–14)                ++++++++++++++++++++++++=

// Create three functions (step1, step2, step3) each taking 1 sec. Call them one after another using await.

// function step1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("first.")
//             resolve()
//         },1000)
//     })
// }
// function step2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//              console.log("Second.")
//             resolve()
//         },1000)
//     })
// }
// function step3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//              console.log("Third.")
//             resolve()
//         },1000)
//     })
// }
// async function sum() {
//     await step1()
//     await step2()
//     await step3()
// }
// sum()


// Create a promise randomSuccess() that resolves or rejects randomly. Handle with try...catch in async function.
// function randomSuccess() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//         let success = Math.random() >0.5;
//         if (success) {
//             resolve("hi vinnay this code is true.")
//         }
//         else {
//             reject("this code is reject")
//             }
//         },1000)
//     })
// }
// async function rendom() {
//     try {
//         let success = await randomSuccess()
//         console.log(success)
//     } catch (error) {
//         console.log(error)
//     }
// }
// rendom()


// Write an async function that fetches user and profile in sequence using two promises.
function async() {
    return new Promise((resolve) => {
        resolve("1st class")
    })
}
function async1() {
    return new Promise((resolve) => {
        resolve("2st class")
    })
}
async function seq() {
    let result = await async()
    console.log(result)
    let success = await async()
    console.log(success)

}
// seq()



// Make a function multiply(a, b) that returns a promise. Resolve product if valid, reject if invalid. Call with await.

function multyply(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number") {
            resolve(a*b)
            } else {
                reject("invalid input both of you")
        }
        },2000)
    })
}
async function num() {
    try {
        let result = multyply(4, 5)
        console.log(result)
        let uness = await multyply(10, "x")
        console.log(uness)
    } catch (error) {
        console.log(error)
    }
}
// num()

// Write an async function to fetch 5 fake posts (array) after 2 sec and print them.

// Write two API simulators: getUsers() (2 sec) and getOrders() (3 sec). Use await Promise.all() to fetch both.

// Write a function retryTask() that retries 3 times with await if promise fails, then rejects


// Write an async function that adds two numbers but waits for 1 second before returning the result.
function addTwoNumber(a,b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        },1000)
    })
}
async function add() {
    // try {
    //     let result = await addTwoNumber(10, 10)
    //     console.log("Result: ",result)
    // }
    // catch (error){
    //   console.log(error)
    // }

    let result = await addTwoNumber(5, 5)
    console.log(result)
}
// add()


// Write two functions:
// getUser() → returns {id: 1, name: "Raj"} after 1 second.
// getPosts(userId) → returns ["Post1", "Post2"] after 2 seconds.
// Use async/await to first get the user and then fetch the posts of that user.

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({Id: 1, name: "Raj"})
        },1000)
    })
}
function getPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(["post1","post2"])  
        },2000)
    })
}
async function fatch() {
    let get = await getUser()
    console.log(get)
   
    let get2 = await getPosts(get.Id)
    console.log(get2)
}
// fatch()

// +++++++++++++++++++++++++++++++   🟢 Basic Coding (1–8)   ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Write a function to check if a number is even or odd.
function checkNum(num) {
    if (num % 2 === 0) {
        return(`${num} is even`)
    } else {
        return(`${num} is odd`)
    }
}
// console.log(checkNum(12))
// console.log(checkNum(16))

// Write a function to reverse a string.
function reverseStr(str) {
    return str.split("").reverse().join("")
}
// console.log(reverseStr("vinay"))
// console.log(reverseStr("ramuk"))

// or

// function str(string) {
//     let charArr = string.split("")
//     let charaa2 = charArr.reverse()
//     let char3 = charaa2.join("")
//     return char3
// }
// console.log(str("sinngh"))


// function strinng(str) {
//     let reverse = ""
//     for (let i = str.length - 1; i >=0; i--){
//     reverse +=str[i]
//     }
//     return reverse
// }
// console.log(strinng("evol"))


// Write a function to find the largest number in an array.

// function largeArr(arr) {
//     return Math.max(...arr)
// }
// console.log(largeArr([20000, 4, 5, 6, 7, 5, 4, 3, 2, 4, 54, 666,]))

// function smallArr(arr1) {
//     return Math.min(...arr1)
// }
// console.log(smallArr([12, 11, 10, 20, 30, 1, 2, 3, 4, 0]))

// function largeArr(arr) {
//     let largest = arr[0];
//     for (let i = 1; i <= arr.length; i++){
//         if (arr[i] > largest) {
//             largest =arr[i]
//         }       
//     }
//     return largest
// }
// console.log(largeArr([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// function smallArr(arr) {
//     let small = arr[0]
//     for (let i = 1; i <= arr.length; i++){
//         if (arr[i] < small) {
//             small = arr[i]
//         }
//     }
//     return small
// }
// console.log(smallArr([2,5,4,3,5,6,7,6,5,4,1]))



// let arr = [32, 434, 5445, 656, 232, 2232]
// let arr1 = Math.max(...arr)
// console.log(arr1)

// let aar = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let aar1 = Math.min(...aar)
// console.log(aar1)

// function large(arr) {
//     let largeNum = arr[0]
//     for (let i = 1; i <= arr.length; i++){
//         if (arr[i] > largeNum) {
//             largeNum= arr[i]
//         }
//     }
//     return largeNum
// }
// console.log(large([2,4,5,6,7,7,7,222]))
function largeArr(arr) {
    let large = arr[0]
    for (let i = 1; i <= arr.length; i++){
        if (arr[i] > large) {
            large = arr[i]
        }
    }
    return large
}
// console.log(largeArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 10]))

function smallArr(arr) {
    small = arr[0]
    for (let i = 1; i <= arr.length; i++){
        if (arr[i] < small) {
            small=arr[i]
        }
    }
    return small
}
// console.log(smallArr([0,443,43,23,66,888,554]))

function arr1(arr) {
    return Math.max(...arr)
}
// console.log(arr1([44,23,5,77,55,1]))




// Write a program to count vowels in a string.
function countVowel(str) {
    let count = 0;
    let vowels = "aeiouAEIOU" 
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])) {
            count ++
        }
    }
    return count
}
console.log(countVowel("Hello, my name is vinay"))

// Write a function to check if a string is a palindrome.
// Write a function that takes an array of numbers and returns the sum.
// Write a program to print the Fibonacci sequence up to n terms.
// Write a function to find the factorial of a number.





