// let age =  prompt("what is your age")
// if (age >= 18) {
//     console.log("you can vote")
// } else {
//     console.log("you can't vote")
// }
// console.log(age)

// let age=18
// if (age >= 18) {
//     console.log("you can vote")
// } else {
//     console.log("you can't vote")
// }
// console.log(age)



// ++++++++++++++++++++=shop discount ++++++++++++++++++

// Amount                      Discount

// 0 --  5000                    0%
// 5001 -- 7000                   5%
// 7001 --9000                    10%
// more than 9000                 20%


// let amount = Number (prompt("Enter the amount"))
// if (amount > 0 && amount <= 5000) {
//     console.log(amount)
// } else if (amount > 5000 && amount <= 7000) {
//     console.log(amount - Math.floor((5 * amount) / 100));
// } else if (amount > 7000 && amount <= 9000) {
//     console.log(amount - Math.floor((10 * amount) / 100));
// } else if (amount > 9000) {
//     console.log(amount - Math.floor((20 * amount) / 100));
// } else {
//     console.log(" you have not initial value")
// }


//++++++++++++++++++++++ Second method++++++++++++

// let amount = Number(prompt("Enter the amount"))
// let dis=0
// if (amount > 0 && amount <= 5000) {
//     dis = onabort;
// } else if (amount > 5000 && amount <= 7000) {
//     dis = 5;
// } else if (amount > 7000 && amount <= 9000) {
//     dis = 10;
// } else if (amount > 9000) {
//     dis = 20;
// } else {
//     console.log(" you have not initial value")
// }
// console.log(amount - Math.floor((dis * amount) / 100));




// +++++++++++++++++++++++++++++++++++++++ count of note for money +++++++++++++++++++++++++++++++++++++
// let amount = Number (prompt("Enter amount"))
// // let amount = 6789;
// if (amount >= 500) {
//     console.log("500 note: ", Math.floor(amount / 500));
//     amount=amount % 500
// }if (amount >= 200) {
//     console.log("200 note: ", Math.floor(amount / 200));
//     amount = amount % 200
// } if (amount >= 100) {
//     console.log("100 note",Math.floor(amount / 100));
//     amount = amount % 100;
// }if (amount >= 50) {
//     console.log("50 note",Math.floor(amount / 50));
//     amount = amount % 50;
// }if (amount >= 20) {
//     console.log("20 note",Math.floor(amount / 20));
//     amount = amount % 20;
// }if (amount >= 10) {
//     console.log("10 note",Math.floor(amount / 10));
//     amount = amount % 10;
// }if (amount >= 5) {
//     console.log("5 note",Math.floor(amount / 5));
//     amount = amount % 5;
// }if (amount >= 2) {
//     console.log("2 note",Math.floor(amount / 2));
//     amount = amount % 2;
// }if (amount >= 1) {
//     console.log("1 note",);
//     amount = amount % 1;
// }


// ternary operator

// let num = 10;
// console.log(num >5 ? "positive" : num<0?"Negative" :"zero")



// switch

// let day = 2;
// switch (day) {
//     case 1: console.log("monday")
//         break;
//     case 2: console.log("tuesday");
//         break;
//     case 3: console.log("wednesday")
//         break;
//     case 4: console.log("Thursday")
//         break;
//     default: console.log("None")
//         break;
// }