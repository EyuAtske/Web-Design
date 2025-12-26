// var myName = "Abebe"

// console.log(myName)
// console.log(myName2)
// var myName2 = "bekele"
// for (let i = 1; i <= 100; i++){
//     if (i == 50){
//         break
//     }
//     console.log(i)
// }
// var i = 1
// while (i <= 100){
//     if (i == 50){
//         break
//     }
//     console.log(i)
//     i++
// }
// let x = 60
// if (x >= 1 && x <= 20 && x%2==0){
//     console.log("The number is even and is between 1 and 20")
// }else if(x>=30 && x<=50){
//     console.log("The number is between 30-50")
// }else{
//     console.log("Invalid")
// }

// var y = (x >= 1 && x <= 20 && x%2==0)?console.log("The number is even and is between 1 and 20"):(x>=30 && x<=50)?console.log("The number is between 30-50"):console.log("Invalid")
// let day = 9
// switch(day){
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3:
//         console.log("wendnesday")
//         break
//     case 4:
//         console.log("Thursday")
//         break
//     case 5:
//         console.log("Friday")
//         break
//     case 6:
//         console.log("Saturday")
//         break
//     case 7:
//         console.log("Sunday")
//         break
//     default:
//         console.log(`Invalid ${day}`)
// }
// function myName(){
//     return "Abebe"
// }
// function add(x=10, y){
//     return x+y
// }
// console.log(add(x=10, y=4))
// var nme = prompt("Enter your name")
// let check = confirm(`are you sure your name is ${nme}`)
// if (check){
//     alert("Welcome")
// }else{
//     alert("hhhhh")
// }
// var num = parseInt(prompt("Enter a number"))
// if (num%2==0){
//     alert("the number is even")
// }else{
//     alert("the number is odd")
// }
function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}
function siv(a,b){
    return a/b
}
function calculator(a, b, callback){
    return callback(a, b)
}
console.log(calculator (1,2, add))