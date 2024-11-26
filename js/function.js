// function Saudacao() {
//     return console.log("Olá, Mundo!")
// }

// Saudacao()

// function Somar(numOne, numTwo) {
//   return numOne + numTwo;
// }

// console.log(Somar(10, 30));

// function Multiplicar(numOne, numTwo) {
//   return numOne * numTwo;
// }

// console.log(Multiplicar(18, 10));

// function MediaQuery() {
//   const getWidhtScreen = window.innerWidth

//   if (getWidhtScreen < 400) {
//     console.log("é mobile")
//   } else if (getWidhtScreen > 400 && getWidhtScreen < 780) {
//     console.log("é tablet")
//   } else {
//     console.log("é desktop")
//   }
// }

// MediaQuery()

// FUNÇÕES ESTÁTICAS
// function salve() {
//     return console.log('salve, sou uma função estática')
// }

// salve()

// function Saudaçao() {
//     return "Olá, Mundo!"
// }

// console.log(Saudaçao())

// function Somar(){
//     return 2+2
// }
// console.log(Somar())


// FUNÇÃO DINÂMICA
// function DynaSomar (a, b){
//     return a + b
// }
// console.log(DynaSomar(10, 200))

// function NumberX(num) {
//     if(num % 2 == 0) {
//         return `${num} eu sou par`
//     } else {
//         return num + "Eu sou ímpar"
//     }
// }

// console.log(NumberX(4))

// function ShortName (fullName) {
//     const splitName = fullName.split(' ')
//     const [firstName, ...rest] = splitName
//     const lastName = rest[rest.length -1]
    
//     return console.log(`${firstName} ${lastName}`)
// }

// ShortName('Maria Jose dos Santos')

// const name = 'João Doria Bosla'
// const transform = name.split(' ')

// const [firstName, ...rest] = transform

// function ResponseBool(bool) {
//     return bool ? "yes" : "no"
// }

// console.log(ResponseBool(false))

//Anonimas
// const exampleAnonimo = function() {
//     console.log('sou uma função anonima')
// }
// exampleAnonimo()

//Arrow
// const arrowFunction = () => {
//     return console.log('Sou uma arrow function')
// }
// arrowFunction()