// how to reate an array?

//1.new Array() or Array()
const vegetables = Array('onion', 'tomato', 'lettuce', 'cucumber')
console.log(vegetables)

const justOneNumber = Array(12)
console.log(justOneNumber)

const number = Array(1, 2, 3, 4, 5, 6, 7)
console.log(number)

//2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['cycling', 'swimming', 'basketball', 'volleyball']
console.log(sports)

//array mixtos

const recipeIngredients = [
    'Flour',
    true,
    2,
    {
        ingredient: 'Milk', quantity: '1 cup'
    },
    false
]
console.log(recipeIngredients)

//Accesing array elements

const firstVegetables = vegetables[2]
console.log(firstVegetables)

//length property

const numberOfVegetables = vegetables.length
console.log(numberOfVegetables)

//Mutability

vegetables.push('avocado')
console.log(vegetables)

// Inmutability

const newVegetables = vegetables.concat(['carrot', 'brocoli'])
console.log(vegetables)
console.log(newVegetables)

// Checking arrays with Array.isArray()\

const isArray = Array.isArray(vegetables)
console.log(isArray)

// Practical exercise: sum all elements of an Array

const numbersArray = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i]
}

console.log(sum)