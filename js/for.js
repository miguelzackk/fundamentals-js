// // loop
// for (i = 0; i <= 100000000000000; i++) {
//     console.log(i)
// }

// Operador de Adição - Incremento
// let int = 1
// // Incremento Pós
// // int = int + 1 (int++)
// console.log(int++, 'pós')
// // Incremento Pré
// console.log(int++, 'pré')

// // Operador de Subtração - Decremento
// let dec = 1
// // Incremento Pós
// // dec = dec + 1 (dec--)
// console.log(dec--, 'pós')
// // Incremento Pré
// console.log(dec--, 'pré')

// for (i = 1; i <= 20; i++) {
// if(i % 2 === 0){
//     console.log(i)
// }
// }

const products = [{
    name: 'Camiseta',
    price: 25
}, {
    name: 'Calça',
    price: 60
}, {
    name: 'Chapéu',
    price: 15
}]

for (let product of products) {
    console.log(product.name  + ' custa ' +  product.price  + ' reais')
}