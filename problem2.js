const numbers = [1, 2, 3, 4, 5];


let calculateSum = (numbers)=>{
    let sum = 0;
    numbers.forEach(element => {
        sum += element;
      
    });
    return sum;
}
console.log(calculateSum(numbers)); // Output: 15