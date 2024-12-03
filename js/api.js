// fetch("https://viacep.com.br/ws/05847600/json/")
//   .then((Response) => {
//     return Response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((Error) => console.error("Erro:", Error));

//   function getCEP(cep){
//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(error => console.error('Error:', error))
//   }

//    getCEP('05847600')

// function getProduct(product) {
//   fetch(`https://fakestoreapi.com/products/${product}`)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error("Error:", error));
// }
// getProduct(1);

function getPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) => {
      const { name, sprites, weight } = data;
      const div = document.getElementById("pokemon-info");

      div.innerHTML = `
            <h2>${name}</h2>
            <img src="${sprites.front_default}" alt="">
            <p>${weight}</p>
        `;
      // const description = `Nome: ${name}, Peso: ${weight}, link da foto ${sprites.front_default}`
      //  console.log(description)
    })
    .catch((error) => console.error("Error:", error));
}
getPokemon("miraidon");
