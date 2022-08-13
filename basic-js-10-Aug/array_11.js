// array 
// order collection of elements


let fruits = ["apple","mango","grapes"]

// indexing 

// updating

fruits[1]="banana"
console.log(fruits)

// types of array is Object



// for check that object is array or not
console.log(Array.isArray(fruits))


// push pop is faster than shift unshift

// array push pop


//adding from last push

fruits.push("graps")
// delete from last pop
let poped_fruit = fruits.pop()
console.log(poped_fruit)


// array shift unshift

// add element in starting
fruits.unshift("papaya")

// delete element in starting
let removed =fruits.shift()
console.log(removed)