const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// console.log(randomCar) will output 'Tesla'
// console.log(otherRandomCar) will output 'Mercedes'
// In the destructuring assignment const { employeeName: otherName } = employee, we're using the renaming syntax. This means:
// The syntax propertyName: newVariableName in destructuring means "take the property named propertyName and assign it to a new variable called newVariableName"
// The error occurs because:
// employeeName was never defined as a variable
// We only created the variable otherName which contains the value 'Elon'




const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);
console.log(employeeName);

// console.log(otherName) will output 'Elon'
// console.log(employeeName) will throw error: employeeName is not defined
// In the destructuring assignment const { employeeName: otherName } = employee, we're using the renaming syntax. This means:
// The value of employee.employeeName is being assigned to a new variable called otherName
// The error occurs because:
// employeeName was never defined as a variable



const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// console.log(password) will output '12345'
// / console.log(hashedPassword) will throw error: hashedPassword is not defined 

// First, we have a password variable directly defined with the value '12345', so that will print as expected.
// In the destructuring assignment const { password: hashedPassword } = person:
// We're trying to get a property named password from the person object and assign it to a variable named hashedPassword


const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first === second);
console.log(first === third);


// console.log(first === second) will output false
// console.log(first === third) will output true
// In the destructuring assignment const [,,,,,,,,third] = numbers:
// We're destructuring the numbers array to get the value of the 7th element (third)



const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// console.log(key) will output 'value'
// console.log(secondKey) will output [1, 5, 1, 8, 3, 3]
// console.log(secondKey[0]) will output 1
// console.log(willThisWork) will output 5
// In the destructuring assignment const { key } = lastTest:
// We're destructuring the lastTest object to get the value of the key property (key)
// In the destructuring assignment const { secondKey } = lastTest:
// We're destructuring the lastTest object to get the value of the secondKey property (secondKey)
// In the destructuring assignment const [ ,willThisWork] = secondKey:
// We're destructuring the secondKey array to get the value of the 2nd element (willThisWork)


var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);

//Paul was found at index 0
//George was found at index 1
//John was found at index 2
//Ringo was found at index 3
//name and index after loop is :undefined 






const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);

//Paul was found at index 0
//George was found at index 1
//John was found at index 2
//Ringo was found at index 3
//name and index after loop is :undefined



const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);

//Paul was found at index 0
//George was found at index 1
//John was found at index 2
//Ringo was found at index 3
//name and index after loop is :undefined

// The printNames function receives the beatles array
// Inside actuallyPrintingNames, it loops through each name in the array
// For each name, it prints the name and its position (index) in the array using console.log
// The string concatenation name + ' was found at index ' + index creates the message for each Beatles member
