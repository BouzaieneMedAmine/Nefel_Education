//  Problem 1

let checkOld = userAge=>{
  return userAge > 18 ?
  "You are good to go!"
  :"Sorry! You must be 18 or older!"

}

console.log (checkOld (21 ))



//Problem 2
let chekRain = raning => {
  return raning ==1 ?
  "Get your rain jacket!"
  :"No rain on today's forecast!"

}
console.log (chekRain(0))

// Problem 3
let chekEven = number => {
  return number%2 ==0 ?
  "That's an even number!"
  :"That's an odd number!"
}
console.log(chekEven(16));

//Problem 4
let checkGreater = ( first , second) => {
  return first > second ?
    `${first} is more than ${second}`
    :`${first} is less than ${second}`

}
console.log(checkGreater("60", "40"));



