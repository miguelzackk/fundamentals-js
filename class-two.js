// Estrutura condicionais

// const a = 2

// if (a > 8) {
//     return console.log('O número é maior que 8')
// } else {
//     return console.log ('O número é menor que 8!')
// }

// const time = "Palmeiras";

// else if
// if (time === "Palmeiras") {
//   console.log("O seu time é Palmeiras");
// } else if (time === "São Paulo") {
//   console.log("O seu time é São Paulo");
// } else {
//   console.log("Não encontramos seu time no nosso banco de dados");
// }

// ternário
// const age = 121;

// let ofGreater =
//   age >= 18 ? console.log("Você é de maior") : console.log("Você é de menor");

// // expressão com AND(e)
// let onlyGreater = age >= 18 && console.log('mostra o site')

// exercicio if
// abaixo de 4 = reprovado
// se a pessoa tirou 4 a 5 = recuperação
// 6 a 9 = aprovado
// 10 = excelente

// const nota = 10
//     if (nota < 4)
//         console.log('Você está reprovado')
//     else if(nota >= 4 && nota <= 5)
//         console.log('Você está de recuperação')
//     else if(nota >= 6 && nota <= 9)
//         console.log('Você está aprovado')
//     else (nota === 10)
//         console.log("Seu desempenho é excelente")

// switch case
// const fruit = 'Morango'
// switch (fruit) {
//     case 'Laranja' : return console.log('Vc é de boas');
//     case 'Morango' : return console.log('Vc é de romantico');
//     default: return console.log('Não temos o significado dessa fruta');
// }

// lição de casacls
const nota = 11
switch (true) {
    case (nota <4) : return console.log('Você está reprovado.');
    case (nota >= 4 && nota <= 5) : return console.log('Você está de recuperação');
    case (nota >6 && nota <= 9) : return console.log('Você está aprovado.');
    case (nota === 10) : return console.log('Seu desempenho é excelente');
    default: return console.log('Sua nota não é válida.');
}