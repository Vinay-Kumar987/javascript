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


















