// primiatvie vs reference datatype


// primiative
let num1=  6
let num2 = num1

num1++
console.log(num1)
console.log(num1)


// refernce type

let array1 = ["item1","item2"]
// let array2 = array1;


array1.push("item3")

console.log(array1)
//console.log(array2)


// how to clone a array


// let array2 = array1.slice(0).concat(["item3","item4"])
// let array2 = [].concat(array1,["item3","item4"])
let array2 = [...array1,"item3","item4"]


