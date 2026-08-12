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

//type conversion

// let secondAge = window.prompt('How old are you?')

// age += 1 
// age is of the datetype string here 

let secondAge
secondAge = Number(age)

// this function converts the datatype to number 
secondAge += 1

console.log(secondAge)

let x = "pizza"
let y = "pizza"
let z = "pizza"

x = Number(x)
y = String(y)
z = Boolean(z)

//day 2 

const pi = 3.14159
let radius 
let circumference

let radiusSubmit = document.getElementById('radiusSubmit')
radiusSubmit.onclick = function()
{
    radius = document.getElementById('radiusInput').value
    radius = Number(radius)
    circumference = 2 * pi * radius
    document.getElementById('circumferenceValue').textContent = "The circumference is :" + circumference
}
//counter program
let increaseBtn = document.getElementById('increaseBtn')
let decreaseBtn =document.getElementById('decreaseBtn')
let resetBtn = document.getElementById('resetBtn')
let count = 0
let countDisplay = document.getElementById('countDisplay')

function increaseFun()
{
    count += 1
    countDisplay.innerText = count
}

function decreaseFun()
{
    count -= 1
    countDisplay.innerText = count
}

function resetFun()
{
    count = 0
    countDisplay.innerText = count
}

increaseBtn.onclick = increaseFun
decreaseBtn.onclick = decreaseFun
resetBtn.onclick = resetFun

// math object 
//get back to math object when needed , not gonna write it down

//random number generator 

let randomNum = Math.random()
console.log(randomNum)

// if u want a random number between 1 - 6 

let randomDice = Math.floor(Math.random() * 6) + 1

//also get back to it when needed

// if statements


