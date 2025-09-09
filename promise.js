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


function get() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
            resolve("data fatch.")
            }
            else {
                reject("Data failed.")
            }
        },1000)
    })
}
async function data() {
    try {
        let success = await get()
        console.log("we have completed successfull: ",success)
    }
    catch (error) {
        console.log("Error:", error)
    }
}
data()

// 4. Sequential vs Parallel

// Write two promises:

// task1() → waits 2 seconds.

// task2() → waits 2 seconds.
// Call them sequentially with await and then in parallel with Promise.all(). Compare execution time.