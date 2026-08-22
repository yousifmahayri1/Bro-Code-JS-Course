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
let GREETING = TIME < 12 ? "Morning" : "Afternoon"

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

// creating a substring from a portion of another string 

// string.slice(start , end) 

const fullNameSlice = "Bro Code"

let slicedName = fullNameSlice.slice(0 , 2)

// use index 

//method chaining
//calling one method after another in one line of code  
// the code beneath is with no method chaining
// let chain = window.prompt('enter your username:') 

// chain = chain.trim() 
// removes whitespace before or after the string 
// let letter1 = chain.charAt(0) 
// letter1 = letter1.toUpperCase() 
// let extraChars = chain.slice(1)
// extraChars = extraChars.toLowerCase 

// the code beneath is with method chaining

// username = username.trim().charAt(0).toLocaleLowerCase() 

// like a combo of methods 

// logical operators 
// and && 
// or | | 
// not ! 

const temp = 20

if (temp > 0 && temp <= 30)
{
    console.log("The weather is good")
}
else if (temp != 67)
{
    console.log("NOT 67")
}
else if (temp > 1 || temp < 3)
{
    console.log('hello')
}
else 
{
    console.log('anything')
}

const isSunny = true

if (!isSunny)
{
    console.log("It is not sunny ")
}

// strict equality 

// = assignment operator 

// == comparison operator 

// === strict equality (compares if values and data types are equal) 

// != inequality operator 

// !== strict inequality operator 

const PI = 3.14

if (PI == '3.14')
{
    console.log('PI')
}
else {
    console.log('NOT PI')
}

// if (PI === '3.14 ') wouldve given NOT PI because 
// === compares values AND data types 

// while loops 

// let whileusername = ''

// while (whileusername === "" )
// {
//     console.log('you didnt enter your username yet ')
// }

let username67 = ''

while (username67 === '')
{
    username67 = window.prompt("Enter your username")
}
console.log(`Hello ${username67}`)

let dont

do {
    console.log('idk')
} 
while(dont === '' || dont === null)

let loggedIn = true
let userr 
let password 

while (!loggedIn)
{
    userr = window.prompt('Enter a username')
    password = window.prompt('enter a password')
}

// for loops 

for (let i = 0 ; i < 3 ; i++)
{
    console.log(i)
}

// number guessing game 

const minNum = 1
const maxNum = 100

//to generate a random num use math.random method
// Math.random generates a random number between 0 and 1 

const answer = Math.random() * (maxNum - minNum + 1)

Math.floor(answer)

// to round down 

// functions 

function happyBirthDay() {
    console.log('happy birthday')
}
happyBirthDay()

function ageFun(ageVar)
{
    console.log(`you are ${ageVar}`)
}

ageFun(14)

function add(x , y)
{
    let result = x + y 
    return result

    // or return x + y 
}
console.log(add(2 , 4))

//new day

// variable scope 

// local scopes = no naming conflicts

// global scope naming conflicts 

// functions cant see inside of other functions 

// arrays 

// a structure that can hold more than one value 

let fruits = ['apple' , 'orange' , 'banana']

console.log(fruits[0])

console.log(fruits) //prints out all of them 

console.log(fruits[3]) //undefined

fruits.push('coconut') //adds an element to the arrray at the last index

fruits.pop()  //deletes the last element

fruits.unshift('mango') //adds an element to the begining

fruits.unshift() //removes the first element

fruits.length

// to see the array size 

let index = fruits.indexOf('orange')

for (let i = 0 ; i < fruits.length ; i++)
{
    console.log(fruits[i])
}

for (let fruit of fruits){
    console.log(fruits)
}

// a shortcut for displaying each index 

fruits.sort()

// sorts in alphabatical order 

fruits.sort().reverse()

// reversed alphabatical 

// spread operator 

// allows an iterable such as an array or string to be expanded into seperate elements 

let numbersArray = [1 , 2 , 3, 4 ,5 ]

let minimum = Math.min(...numbersArray)

// didnt understand this one 

// rest parameters = allow a function work with a variable number of arguments by bundling 
// them into an array 

// the opposite of spread 

function openFridge (...foods) {
    console.log(foods)
}

// this function is designed to accept whatever number of arguments 

const food1 = 'pizza'
const food2 = 'ham'
const food3 = 'hotdog'
const food4 = 'sushi'

openFridge(food1 , food2 , food3 , food4)

//random password generator , get back to it

// callback = a function thats passed as an argument to another function 

function helloFun()
{
    console.log('hello')
}

function goodbyeFun()
{
    console.log('goodbye')
}

helloFun(goodbye)

// dont add () , youll call it right away , just use the fun name 
// invoke means call 
// this is called callback 
//local variable = a variable thats declared inside a function 

// iterate means loop through

//foreach() = a method used to iterate over the elements of an array
//and apply a specified functions (call back) to each element

//  array.forEach(callback)

let numbers = [1 , 3 , 5]

function display(element)
{
    console.log(element)
}

numbers.forEach(display)

// functions runs for each index 

function doubleValue(element , index , array)
{
    array[index] = element * 2
}

numbers.forEach(doubleValue)

//map() = a method that accepts a callback and applies that function to each element of an array 
// BUT it returns a new array

// so its like foreach but it returns a new array 

const numbersMap = [1 , 2 , 3 , 4 , 5]

function square(element)
{
    return Math.pow(element , 2)
}

const squares = numbersMap.map(square)

const students = ['yousef' , 'patrick' , 'squid']

function upperCase(element){
    return element.toUpperCase()
}

const upperStudents = students.map(upperCase)

// store the mapped array in a new variable

// filter() = creates  a new array by filtering out elements

 let number = [1,2,3,4,5,6,7]

 function isEven(element) 
 {
    return element % 2 === 0

    //is even = true
 }

 function isOdd(element)
 {
    return element % 2 !== 0
 }

 let evenNums = number.filter(isEven)
 
 let oddNums = number.filter(isOdd)

 let ageGroup = [ 10 , 2 , 20 , 21 , 100 , 2 , 6 , 16 , 12]

 function isAdult(element)
 {
   return element > 18
 }

 let adultAgeGroup = ageGroup.filter(isAdult)

 console.log(adultAgeGroup)

 function isMinor(element)
 {
    return element < 18
 }

 let minorsAgeGroup = ageGroup.filter(isMinor)

 // pass a function to filter by the functions rules

 // REDUCE() = reduces the elements of an array to a single value

 const pricesArray = [1 , 5 , 6 ,77, 49 , 30]

 function sumPrices(previous , element)
 {
    return previous + element

    // since reduce method runs for each array it will use all elements 
    // and sum them 
 }

 const total = pricesArray.reduce(sumPrices)

// FUNCTIONS EXPRESSIONS
//   = a way to define functions as values or variables

const hello = function()
{
    console.log('hello')
}

hello()

setTimeout(function()
{
    console.log('hello')
}
, 3000) //counted in ml seconds

// in js you can pass an entire function as an argument and itll be treated as a value 
// look above 

//    arrow functions , good for simple functions youll only use once

const helloArrow = () => {console.log('hello')}

helloArrow()

// git test pull

// test pull from github

//Objects 
// a collection of related properties or methods 

const person1 = {
    firstName: 'Yousif',
    lastName: 'Mahayri',
    age: 19,
    isEmployed: true ,
    greetingFun : function()
    {
        console.log('Hello , im Yousef')
    }
}

console.log(person1.firstName)
console.log(person1.lastName)
console.log(person1.age)
console.log(person1.isEmployed)

// Objects can't have the same property name

const car1 = {
    name : 'Nissan' ,
    year : 2026 ,
    horsePower : '188 hp'
}

console.log(car1.horsePower)

// this is a keyword , a reference to the object where THIS is used 

const cinema = {
    seats : 300 , 
    isFoodAllowed : false , 
    cinemaName : 'PrimeCinema' ,

    welcome : () =>
    {
        console.log('Welcome to Prime Cinema')
    } ,

    numberOfSeats : function() {
        console.log(`We have ${this.seats} left`)
    }

}

cinema.welcome()

// its like saying cinema.seats 

const student2 = {
    name : 'ali' ,
    age : 19 ,
    Identification : function() {
        console.log(`Students name is ${this.name} and hes ${this.age} `)
    }

}

// the this keyword doesnt work with arrow functions 

// Constructors = speacial method for defining the properties and methods of an object

function Car(make, model, year, color) {
    this.make = make; 
    this.model = model;
    this.year = year; 
    this.color = color;
}

const car3 = new Car('Ford', 'Mustang', 2024, 'red');

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

const car4 = new Car('Chevrolet', 'Camaro', 2025, 'black');

console.log(car4.make);
console.log(car4.model);
console.log(car4.year);
console.log(car4.color);

function Student(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
}

const student10 = new Student('Ahmad', 14, 160);

console.log(student10.name);

// constructors should start start with a capital letter
// use the keyword new 

// Classes

class Product {
    constructor(name , price) {
        this.name = name ; 
        this.price = price
    }
    
    displayProduct()
    {
        console.log(`Product: ${this.name}`) 
        console.log(`Price: $${this.price}`)
    }
}

const product2 = new Product ('Shirt' , 19,99)
product2.displayProduct() 