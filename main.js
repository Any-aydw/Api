
 let characterDiv = document.getElementById("characterDiv")

// let totalPersonajes = document.querySelector("character")
fetch("https://rickandmortyapi.com/api/character") 
 .then((data) => {
 return data.json()
}).then( (data) => {
let personajes = data.results;
personajes.forEach((itemPersonajes) => {
    characterDiv.innerHTML += `<div> 
                                   <img src="" alt="">
                                   <h3>Nombre: ${itemPersonajes.name} </h3>
                                   <p>Género: ${itemPersonajes.}</p>
                                   <p>Especie</p>
                                   <p>Estado</p>
                                   <p>Origen</p>
                                   <p>Locación</p>
                                </div>} `
                               
});

 })