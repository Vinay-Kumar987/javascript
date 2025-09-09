// console.log("A")
// console.log("B")
// console.log("C")
// console.log("D")
// console.log("E")
// console.log("F")

// +++++++++++++++++++++function++++++++++++++++++++++++++++++++++++++


// +++++++++++++++++  declaration function +++++++++

// function num(a, b) {
//     // console.log(a+b)
//     return a + b;
// }
// let x= num(12, 12);
// let y = num(12, 112)
// console.log(x,y)

// function num() {
//     let a = 10
//     let b = 15;
//     return a + b;
// }
// let x = num();
// let y = num();
// console.log(x,y)




// function hiMyname() {
//     console.log("A")
// console.log("B")
// console.log("C")
// console.log("D")
// console.log("E")
// console.log("F")
// }
// hiMyname()



// add two number

// function addTwonumber(num1, num2) {
//     console.log(num1+num2)
// }
// addTwonumber(4, "5")
// addTwonumber(4, 5)

// function addtwonumber(a, b) {
//      console.log(a+b)
// }
//  addtwonumber(44,44)


// function myFunction() {
//     console.log("hi vinay , how are you")
// }

// myFunction()


// function myFunction(sms) {
//     console.log(sms);
// }
// myFunction("i have a six month internship expriance ")

// function myName(name) {
//     console.log(name);
// }
// myName("my name is vinay kumar singh ")

// ++++++++++++++++++++++++++++++++Add two number ++++++++++++++++++++++++++


// function addTwoNumber(num1, num2) {
//     console.log(num1 + num2)
// }
// addTwoNumber(10,12)

// function addTwo(num1, num2) {
//     // let result = (num1 + num2)
//     return (num1 +num2)
// }
// console.log(addTwo(12,21))
// // const result = addTwo(12, 12)
// // console.log(result)



// function loginUser(userName, Idname) {
//     return `${userName} just login in, ${Idname} just create id `
// }
// console.log(loginUser(" vinay singh","vinay@1234"))


// function calculateCard(...num1) {     // ... rest method used
//     return num1
// }
// console.log(calculateCard(12,23,45,66))
// const user = {
//     username: "vinay@12",
//     price: 2000
// }
// function handelObjects(anyobjects) {
//     console.log(`username ${anyobjects.username} and price ${anyobjects.price}`)

// }
// handelObjects(user)

// const user = {
//     Age: 23,
//     Class: "Btech",
//     Roll_no: 1321005
// };
// function userData(studets) {
//     console.log(`age ${studets.Age} and class ${studets.Class} and Roll_no is ${studets.Roll_no}`)
// }
// userData(user)


// Array pass in function


// const myArray = [1, 2, 3, 4, 5]
// function returnSecondValue(getArray) {
//     return getArray=[1]
// }
// console.log(returnSecondValue(myArray))





 







// ================== arrow function  ++++++++++++++++++++++++++

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(10, 10))

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(1,1))

// const addTwo = (num1, num2) => ({ username: "vinay" })
// console.log(addTwo(1,1))

// ++++++++++++++++++++++++++++++iMMEDIATELY Invoked function Expression (IIFE)

// function chai() {
//     console.log("DB Connectd");
// }
// chai();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=


// How does javascript works behind the scene

// there are two javascript Executeion content

// 1. Globle execution Content
// 2. Function Execution content











// ================== arrow function  ++++++++++++++++++++++++++

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(10, 10))

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(1,1))

// const addTwo = (num1, num2) => ({ username: "vinay" })
// console.log(addTwo(1,1))

// let num = "5";

// console.log(num==5); //true
// console.log(num===5);//false



// let num = 5;
// let num1 = "5";
// console.log(num===num1);

// if (2 == "2") {
//    console.log("yes")
// }

// if (2 === "2") {
//     console.log("NO")
// }



function addTwoNumber(a, b) {
    let num = a + b
    console.log(num)
    return num
}
// addTwoNumber(10,20)



function loginUser(username) {
    return `${username} just loggin in `
}
// console.log(loginUser("vinay singh"))


function calculation(...num) {
    return num
}
// console.log(calculation(10,20,30))


// function objectss 
const user = {
    username: "vinay singh",
    price : 399
}
function handelObject(anyobject) {
    console.log(` username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handelObject(user)
// handelObject({
//     username: "raj",
//     price: 999
// })

// function array

const array = [1, 2, 3, 4, 5, 6, 7]
function returnArray(getArray) {
    return getArray[3]
}
// console.log(returnArray(array));


//  nested Array function

// function one() {
//     const username = "vinay"
//     function two() {
//         const website = "youtube"
//         console.log(username)
//     }
//     // console.log(website)
//     two()
// }
// one()

// ++++++++++++++++== this functionn used

const user1 = {
    username: "vinay",
    price: 699,
    welcome: function () {
        console.log(`${this.username}  welcome to website`);
}
}

// user1.welcome()
// user1.username = "Amit"
// user1.welcome()

const str = {
    username :"Krishna",
    price: 99990,
    welcome: function () {
        console.log(`${this.username}  welcome to my shope. this phone price is ${this.price}`)
    }
}
str.welcome()
str.username = "radheshyam"
str.welcome()





