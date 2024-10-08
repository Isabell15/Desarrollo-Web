//Methods that iterate over an array
//Methods that Do Not modify the original array (immutability)

// filter()

const numbers = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers)
console.log(evenNumbers)

// reduce() . case1

const numberReduce  = [1,2,3,4,5,6,7]
const sum = numberReduce.reduce((acumulator, currentValue) => acumulator + currentValue, 0)

console.log(numberReduce)
console.log(sum)

//reduce . case2

const words = ['Airplane', 'Alligator', 'Animal', 'Time', 'Alligator', 'Time', 'Time']

const wordFrecuency = words.reduce((accumulator, currentValue)=> {
 if (accumulator[currentValue]) { // si accumulator en la posicion currenValue existe , entra en el else 
    accumulator[currentValue]++   // si existe se le suma un valor q ya esta guardado
 }else {
    accumulator[currentValue] = 1 //si no existe guarda un valor inicial en este caso1 
 }
 return accumulator
},{})                             //el valor inicial es un objeto vacio

console.log(wordFrecuency)

//exercise

const grades = [67,90,57,45,80,75]

const passingGrades = grades.filter(grade => grade=> 70)

const averagePassingGrade = passingGrades.reduce((suma, grade)=>sum + grade, 0) /passingGrades.length

console.log('Original Grades:', grades)
console.log('Passing Grades:', passingGrades)
console.log('Average Passing Grades', averagePassingGrade)