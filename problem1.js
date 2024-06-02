const animals = ["Dog", "Cat", "Elephant", "Giraffe", "Lion", "Tiger", "Zebra", "Kangaroo", "Panda", "Monkey"];
let extractSubArray = (animals) =>{
  let newarray = animals.slice(3, 7);
  return newarray;
}
console.log(extractSubArray(animals));