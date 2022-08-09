// string indexing


let first_name ="Arjun"
// A r j u n
// 0 1 2 3 4


// first index = 0
// last index = length - 1
console.log(first_name[1])

// how many characters
console.log(first_name.length)

// strings are imputable
// Methods
let firstName =" Suraj   "
// trim()
console.log(firstName.length)
let newString= firstName.trim() // trim make a new string after removing space
console.log(newString.length)

// upercase // lower case
let upperCaseString = newString.toUpperCase();
console.log(upperCaseString) 


//slice

let newSliced = upperCaseString.slice(0,4) //sura
console.log(newSliced) 


// Type of operators

// primative Data-types

 //string
 //number
 //booleans
 //undefined
 //null
 //bigInt
 //symbol

 let age = 22
 let my_name ="arjun"

 console.log(typeof(age))
 console.log(typeof(my_name))

 // convert number to string

 age = 22
 console.log(typeof(age+""))
age = String(age)
 // string to number

 age = +"22"

 age = Number(age)

 console.log(typeof(age))


 // string concatination

 let str1 ="arjun"
 let str2 = "singh"

 let fullName = str1+' '+str2
 console.log(fullName)



 // template-String


 // backticks `
 console.log(`my name is ${fullName} and age is ${age}`)