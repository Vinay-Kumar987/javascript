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

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                console.log("you can login.")
                resolve()
            } else {
                reject("you can't login.")
            }
        },2000)
    })
}
function getuser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let pass = false;
            if (pass) {
                console.log("Get user profile")
                resolve()
            } else {
                reject("not get user profile.")
            }
        },2000)
    })
}
async function complete() {
    try {
        await login();
        await getuser();
    }
    catch (error){
        console.log("Error:",error)
    }
}
complete();
