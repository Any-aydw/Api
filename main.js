
 let characterDiv = document.getElementById("characterDiv")
 let btnfilterAll = document.getElementById("btnfilterAll")
 let btnfilterFemale = document.getElementById("btnfilterFemale")
 let btnfilterMale = document.getElementById("btnfilterMale")
 let btnfilterGenderless = document.getElementById("btnfilterGenderless")
 let btnfilterUnknown = document.getElementById("btnfilterUnknown") 
 let personajes;

 function mostrarEnElHtml (arrPersonajes){
    characterDiv.innerHTML = "";
    arrPersonajes.forEach((itemPersonajes) => {
        characterDiv.innerHTML += `<div class= "characterDiv"> 
                                     <img src="${itemPersonajes.image}" alt="personaje">
                                     <p>Nombre: ${itemPersonajes.name} </p>
                                     <p>Género: ${itemPersonajes.gender}</p>
                                     <p>Especie: ${itemPersonajes.species}</p>
                                     <p>Estado: ${itemPersonajes.status}</p>
                                     <p>Origen: ${itemPersonajes.origin.name}</p>
                                     <p>Locación: ${itemPersonajes.location.name}</p>
                                    </div> `
    });
 }
fetch("https://rickandmortyapi.com/api/character") 
 .then((data) => {
 return data.json()
}).then( (data) => {
let personajes = data.results;
mostrarEnElHtml(personajes);
})

function filterFemale () {
let women = personajes.filter((itemPersonajes) =>{
    return itemPersonajes.gender==="Female"
})
mostrarEnElHtml(women)
};

btnfilterFemale.addEventListener('click', filterFemale);