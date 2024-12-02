// function banana(maca) {
//   if (maca.length <= 0){
//     return console.log("Insira um nome válido!");
// }
//   const splitName = maca.split(" ");
//   const [pera, ...rest] = splitName;
//   const melao = rest[rest.length - 1];
//   return console.log(`Olá ${pera} ${melao}, Seja Bem-Vindo!`);
// }
// banana("");

function calculo(peso, altura) {
  return peso / altura ** 2;
}
const imc = calculo(45, 1.7);

console.log(`O seu IMC é ${calculo(45, 1.7).toFixed(2)}`);
switch (true) {
  case imc < 18.5:
    console.log("Você está abaixo do peso.");
    break;
  case imc >= 18.5 && imc < 24.9:
    console.log("Você está com peso normal.");
    break;
  case imc >= 25 && imc < 29.9:
    console.log("Você está com sobrepeso.");
    break;
  case imc >= 30 && imc < 34.9:
    console.log("Você está com obesidade grau 1.");
    break;
  case imc >= 35 && imc < 39.9:
    console.log("Você está com obesidade grau 2.");
    break;
  case imc >= 40:
    console.log("Você está com obesidade grau 3 (mórbida).");
    break;
  default:
    console.log("Não foi possível classificar seu IMC.");
}
