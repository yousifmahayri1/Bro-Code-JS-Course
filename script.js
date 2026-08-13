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
document.getElementById('usernameSubmit').onclick = function()
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

let age2 = 25

if (age2 >= 18)
{
    console.log('You are old enough to enter this site')
}
else if (age2 === 14)
{
    console.log('GET OUT')
}
else 
{
    console.log('You must be over 18 to enter this site')
}


//day 3

const myCheckBox = document.getElementById('myCheckBox')
const visaBtn = document.getElementById('visaBtn')
const masterCardBtn = document.getElementById('masterCardBtn')
const payPalBtn = document.getElementById('payPalBtn')
const subResult = document.getElementById('subResult')
const mySubmit = document.getElementById('mySubmit')
const paymentResult = document.getElementById('paymentResult')

mySubmit.onclick = function()
{
    if(myCheckBox.checked)
    {
        subResult.textContent = "You are subscribed"
    }
    else
    {
        subResult.textContent = "You are not subscribed"
    }

    if (visaBtn.checked)
    {
        paymentResult.textContent = "You are paying with visa"
    }
    else if (masterCardBtn.checked)
    {
        paymentResult.textContent = "You are paying with Mastercard"
    }
    else if (payPalBtn.checked)
    {
        paymentResult.textContent = "You are paying with PayPal"
    }
    else
    {
        paymentResult.textContent = "Please select a payment method"
    }
}
//ternary operator 

// a shortcut for if and else statements 

let AGE =18
let MESSAGE = AGE >= 18 ? "you are an adult" : "you are a minor"

console.log(MESSAGE)
// condition ? codeiftrue : codeiffalse 

let TIME = 16
let GREETING = time < 12 ? "Morning" : "Afternoon"

console.log(GREETING)

// switches , an efficient replacement for many else if statements 

let daySwitch = 1

switch(daySwitch)
{
    case 1 : 
    // any code 
    console.log('it is monday') 
    break
    
    case 2 : 
    console.log('it is tuesday')
    break
    // etc 
    default : 
    console.log('executed if there are no matching cases')
}

// string methods , built in methods

let stringMethod = 'BroCode'

stringMethod.charAt(0)

// gets the character at a specific index 

stringMethod.indexOf("o") 
// returns the index of the first occurance of a char

stringMethod.lastIndexOf("o")

stringMethod.length

stringMethod.trim()

// removes white space 

stringMethod.toUpperCase()

stringMethod.toLocaleLowerCase()

stringMethod.repeat(3)

let userNameMethod = " BroCode"

let methodResult = userNameMethod.startsWith(" ")

if(methodResult)
{
    console.log('Your username cant begin with a white space')
}
else 
{
    console.log(methodResult)
}

// theres also endswith 

// userNameMethod.includes(" ") 

let phoneNumber = "123-425-2352"

phoneNumber = phoneNumber.replaceAll("-" , "/")

// replaces first with second 

// string slicing 





