//  your solutions start here
//  make sure to connect your main.js file with your html 
// happy coding 🧑‍💻

// question1
const sample1 = document.getElementById("sample1");
document.addEventListener("DOMContentLoaded", () => {
    console.log(sample1);
    console.log(sample1.textContent);
});
// question2
//2.1
const tech = document.getElementById("techCompanies");
console.log(tech.textContent);
//2.2
const tech_companies = document.querySelector("#techCompanies");
console.log(tech_companies.textContent);
//2.3
const tech_count = document.querySelectorAll("#techCompanies li");
var total = 0;
tech_count.forEach((li) => {total += 1;});
console.log(total);
//2.4
const class_red = tech.querySelectorAll(".red");
class_red.forEach((li) => {console.log(li.textContent);});
const class_red2 = tech.getElementsByClassName("red");
for (const li of class_red2) {
    console.log(li.textContent);
}
//2.5
const li = document.createElement("li");
li.textContent = "Facebook";
console.log(li);
//2.6
li.classList.add("blue");
//2.7
const ul = document.getElementById("techCompanies");
ul.append(li);
console.log(ul.textContent)
//question3
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("No");
yesButton.addEventListener("click", (e)=> {
    document.body.style.backgroundColor = "lightblue";
})
noButton.addEventListener("click", (e) => {
    if (document.body.style.backgroundColor != null){
        document.body.style.backgroundColor = null;
    }
})
//question4
const form = document.getElementById("adder");
const sumDiv = document.getElementById("sum");
if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const firstInput = form.querySelector('input[name="first-value"]');
        const secondInput = form.querySelector('input[name="second-value"]');
        const val1 = firstInput.value.trim();
        const val2 = secondInput.value.trim();
        const num1 = Number(val1);
        const num2 = Number(val2);
        if (val1 === "" || val2 === "" || isNaN(num1) || isNaN(num2)) {
        sumDiv.textContent = "Please enter numerical values only";
        } else {
            const sum = num1 + num2;
            const average = sum / 2;
            sumDiv.textContent = `Sum: ${sum} Average: ${average}`;
            console.log(`Sum = ${sum} Average = ${average}`);
        }
    });
}
