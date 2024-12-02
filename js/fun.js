// const fullname = "Lucas do Espirito Santo";

// console.log(fullname.length, "conta caracteres");

// const fruit = ["maça", "pessego", "uva"];
// // console.log(fruit.length, 'array')
// // console.table(fruit)
// console.log(fruit[fruit.length -1])

// const cortaNome = fullName.slice(1, 5)
// console.log(cortaNome)

// const fullName = 'Miguel Zacharias da Silva'
// const transformToArray = fullName.split (' ')
// const saudacao = 'Olá, ' + transformToArray[0] + ' ' + transformToArray[transformToArray.length -1]
// console.log(saudacao)

function FirstName(fullName) {
  return `Olá, ${fullName.split(" ")[0]} tudo bem?`;
}
console.log(FirstName("Mauricio de Souza"));
