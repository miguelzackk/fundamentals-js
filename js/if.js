// const age = 20

// if(age >= 18 && age <= 60) {
//     return console.log('Você pode beber!')
// } else if (age === 17){
//     return console.error('Falta apenas um ano para você beber!')
// } else {
//     return console.error('Você não pode beber')
// }

const nota = 100
    if (nota <= 3)
        console.log('Você está reprovado.')
    else if(nota >= 4 && nota <= 6)
        console.log('Você está de recuperação.')
    else if(nota >= 7 && nota <= 9)
        console.log('Você está aprovado.')
    else if (nota === 10)
        console.log("Passou por excelência.")
    else 
    console.log("Nota inválida.")