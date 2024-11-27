// function Saudacao(name){
//     const splitName = name.split(' ')
//     const [firstName, ...rest] =splitName
//     const lastName = rest[rest.length-1]

//     return console.log (`Olá ${firstName} ${lastName}, Seja Bem-Vindo!`)
// }

// Saudacao('Miguel Zacharias da Silva')


function IMC(a, b){
    return a / (b ** 2);
}

console.log(`O seu IMC é ${IMC(60, 1.80)}`);