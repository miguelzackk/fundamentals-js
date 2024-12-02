const nota = 11;
switch (true) {
  case nota <= 3:
    return console.log("Você está reprovado.");
    break;
  case nota >= 4 && nota <= 6:
    return console.log("Você está de recuperação");
    break;
  case nota >= 7 && nota <= 9:
    return console.log("Você está aprovado.");
    break;
  case nota === 10:
    return console.log("Seu desempenho é excelente");
    break;
  default:
    return console.log("Sua nota não é válida.");
}
