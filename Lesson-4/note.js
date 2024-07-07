//Primitives types
let x
x = 7
x = "Hello  World"
x = true
// x = null
// x = undefined
console.log(x)
let x_copy = x
x_copy = "Hello"
console.log(x_copy)

// Reference types
let objA = {name: "John", age: 30}
let objB = objA
objB.age = 31
console.log(objA)
console.log(objB)

//Object
const objC = {name: "John", age: 30}
const objD = objC
objC.age = 31
console.log(objC)
console.log(objD)

//Function
function add(a, b) {
  return a + b
}