let data = [1, 2, 3];
let mapNumbers = (numbers, fn) => {
    let result = [];
    for(let i = 0; i < numbers.length; i++){
        result.push(fn(numbers[i]));
    }
    return result;
}
let doubleNumber = (number) => {
    return number * 2;
};
console.log(mapNumbers(data, doubleNumber));
