// function min_arr() {
//     let arr = []
//     let size = parseInt(prompt("Enter the size of the array?"))
//     arr.push(parseInt(prompt("Enter a number?")))
//     let min = arr[0]
//     for (let i = 1; i < size; i++) {
//         let val = parseInt(prompt("Enter a number?"))
//         if (val < min) {
//             min = val
//         }
//         arr.push(val)
//     }
//     return min
// }
// function evens(arr) {
//     if (arr.length == 0) {
//         return []
//     }
//     let even = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 == 0 && arr[i] % 2 == 0) {
//             even.push(i)
//         }
//     }
//     return even
// }
// function sum_of_cubes(arr) {
//     if (arr.length == 0) {
//         return 0
//     }
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i] * arr[i] * arr[i]
//     }
//     return sum
// }
// function avg_whole(arr) {
//     if (arr.length == 0) {
//         return 0
//     }
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     let avg = sum / arr.length
//     return Number.isInteger(avg)
// }
// function sum_multiple(arr) {
//     if (arr.length == 0) {
//         return 0
//     }
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i] * i
//     }
//     return sum
// }
// function isSpecial(arr) {
//     if (arr.length == 0) {
//         return false
//     }
//     let special = false
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 == 0 && arr[i] % 2 == 0 || i % 2 != 0 && arr[i] % 2 != 0) {
//             special = true
//         } else {
//             special = false
//         }
//     }
//     return special
// }
// function isVanila(arr) {
//     if (arr.length == 0) {
//         return false
//     }
//     let valnila = arr[0] % 10
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i]
//         if (num == 0 && vanilla != 0) {
//             return false
//         }
//         while (num > 0) {
//             if (num % 10 != valnila) {
//                 return false
//             }
//             num = Math.floor(num / 10)
//         }
//     }
//     return true
// }
// that enters a white space in every instance of a lower character followed imediatly by an upper character 
function lower_upper(){
    let str = prompt("Enter a string?")
    let s = str.split('')
    let new_str = ""
    for (let i = 0; i < s.length; i++){
        new_str += s[i]
        if (s[i] >= 'a' && s[i] <= 'z' && s[i+1] >= 'A' && s[i+1] <= 'Z'){
            new_str += ' '
        }
    }
    return new_str
}
//write a js funcion that moves all capital letters to the front of the word
function move_front(){
    let str = prompt("Enter a string?")
    let s = str.split('')
    let new_str = ""
    for (let i = 0; i < s.length; i++){
        if (s[i] >= 'A' && s[i] <= 'Z'){
            new_str += s[i]
        }
    }
    for (let i = 0; i < s.length; i++){
        if (s[i] >= 'a' && s[i] <= 'z'){
            new_str += s[i]
        }
    }
    return new_str
}
//write a function that takes a string that return the middle characters if the word length is odd return the middle character if the lengeth is even return the 2 middle characters
function return_mid(){
    let str = prompt("Enter a string?")
    let s = str.split('')
    console.log(str)
    if (s.length % 2 == 0){
        let mid = s.length / 2
        let fmid = s[mid-1]
        let smid = s[mid]
        return {fmid , smid}
    }
    let mid = Math.floor(s.length / 2)
    let only_mid = s[mid]
    return only_mid
}
//create a function that takes a number from 1 to 12 and returns its corrospondig month
//write a function that takes a year and returns its corresponfing century
//takes whether a date is valid or not
//write a function that checks palindrom in date

function what_month(){
    let mon = parseInt(prompt("Enter a month?"))
    let month = new Date(2025, mon-1)
    return month.toLocaleString('en-US',{ month: 'long' })
}

function get_century(){
    let year = parseInt(prompt("Enter a year?"))
    return Math.floor((year - 1) / 100) + 1;
}
function is_valid(){
    let year = parseInt(prompt("Enter a year?"))
    let month = parseInt(prompt("Enter a month?"))
    let day = parseInt(prompt("Enter a day?"))
    if (month < 1 || month > 12){
        return false;
    }
    if (day < 1 || day > 31){
        return false;
    }
    if ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30) {
        return false;
    }
    if (month === 2) {
        let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        if (isLeapYear && day > 29) {
            return false;
        } else if (!isLeapYear && day > 28) {
            return false;
        }
    }
    
    return true;
}
function is_palindrom(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let new_date = "" + year + month + day
    let split_str = new_date.split('')
    let reverse_split_str = []
    for (let i = split_str.length-1; i >=0 ; i--){
        reverse_split_str.push(split_str[i])
    }
    console.log(split_str)
    console.log(reverse_split_str)
    return new_date === reverse_split_str.join('')
}

function main() {
    // let arr = [0, 1, 2, 3, 4, 5, 6]
    // let valnila = [1, 11, 111, 1111]
    // console.log(evens(arr))
    // console.log(sum_of_cubes(arr))
    // console.log(avg_whole(arr))
    // console.log(sum_multiple(arr))
    // console.log(isSpecial(arr))
    // console.log(isVanila(valnila))
    let date = new Date(1922, 8, 1)
    date.getFullYear()
    console.log(is_palindrom(date))
}
main();