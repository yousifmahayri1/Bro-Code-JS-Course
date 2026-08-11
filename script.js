// variables 

let age = 19
let price = 10.99
let gpa = 2.1

console.log(age)

console.log(`You are ${age} years old`)

console.log(`The price is ${price}`)

// Backticks create a template literal (a special type of string).
// ${} means: 
// Put this JavaScript value inside the string. 

console.log(typeof age)

// js doesnt seperate between int , floats in datatypes theyre off the data type Number 

let firstName = 'Yousef'

console.log (`Your name is ${firstName}`)

let online = true

console.log(`Status: ${online}`)

let header = document.getElementById('header')
// backticks are like strings but you can include variables in them 

let studentsNumber = 100 
studentsNumber = 100 + 1
let newStudents = 30
studentsNumber += newStudents
studentsNumber++
console.log(studentsNumber)

//accepting user input 
//easy way = window prompt
//professional way = html textbox

let username 

// username = window.prompt('Whats your username? window.prompt') 

console.log(username)

//above is the easy way 

//below is the professional way 

let Username
document.getElementById('mySubmit').onclick = function()
{
    Username = document.getElementById('myText').value
    console.log(Username)
    document.getElementById('header').textContent = `Hello ${Username}`
}
// header.textContent = `Hello ${Username} you are ${age} welcome to our webpage` 





