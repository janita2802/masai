const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];
let rearrangeArray = (numbers1) => {
    let first3 = numbers1.slice(0,3);
    let first3remove = numbers1.splice(3);
    finalarray = [...first3remove, ...first3];
    return finalarray;
    
}

console.log(rearrangeArray(numbers1));