// for(let i=0; i < 5; i++){
//     let row = ""
//     for(let j=0; j < 5; j++){
//        row += "*"
//     }
//     console.log(row)


// }
function myFirst(){
    console.log("Hello")
}
myFirst();
function mySecond(val){
    console.log(val)
}
mySecond("hello");

let inSecond = (min) => {
    return min*60
}
console.log(inSecond(3))
let hourinSecond = hour => hour*60*60
console.log(hourinSecond(4))

let inDays = age => age*365
console.log(inDays(21))
function totalLegs(chicken, cow, pigs){
    return ((chicken*2)+ (cow*4) + (pigs*4))
}
console.log(totalLegs(2, 5, 1))
function grade(score){
    if (score>100 || score<0){
        return "Invalid score"
    }
    else if(score >= 90){
        return "A"
    }
    else if(score >= 80){
        return "B"
    }
    else{
        return "c"
    }
}
console.log(grade(90))
let input = parseInt(prompt("Enter a number"))
function check(input){
    let iseven = "even";
    let isPositive = "Positive"
    if (input < 0){
        isPositive = "Negative"
    }
    if (input % 2 != 0){
        iseven = "odd"
    }
    return {isPositive, iseven}
}
let accepted = check(input)
console.log(accepted.isPositive)
console.log(accepted.iseven)