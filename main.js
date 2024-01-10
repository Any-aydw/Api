
 let characterDiv = document.getElementById("characterDiv")

// let totalPersonajes = document.querySelector("character")
fetch("https://rickandmortyapi.com/api/character") 
 .then((data) => {
 return data.json()
}).then( (data) => {
let personajes = data.results;
personajes.forEach((itemPersonajes) => {
    characterDiv.innerHTML += `<div class= "characterDiv"> 
                                   <img src="${itemPersonajes.image}" alt="personaje">
                                   <h3>Nombre: ${itemPersonajes.name} </h3>
                                   <p>Género: ${itemPersonajes.gender}</p>
                                   <p>Especie: ${itemPersonajes.species}</p>
                                   <p>Estado: ${itemPersonajes.status}</p>
                                   <p>Origen: ${itemPersonajes.origin.name}</p>
                                   <p>Locación: ${itemPersonajes.location.name}</p>
                                </div> `
                               
});

 })