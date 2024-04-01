// problem 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [  randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // output 'tesla'
console.log(otherRandomCar) // output 'mercedes'

// problem 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name : otherName } = employee;
//Predict the output
console.log(name); // erreur
console.log(otherName); // erreur

// problem 3 

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // output '12345'
console.log(hashedPassword); // output undefined 

// problem 4 
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); // output 2 == 5  is False 
console.log(first == third); // output 2 == 2  is True 

// problem 5 

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // not defined
console.log(secondKey); // not defined
console.log(secondKey[0]); // not defined
console.log(willThisWork); // not defined









