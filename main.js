
 let characterDiv = document.getElementById("characterDiv")
 let btnfilterAll = document.getElementById("btnfilterAll")
 let btnfilterFemale = document.getElementById("btnfilterFemale")
 let btnfilterMale = document.getElementById("btnfilterMale")
 let btnfilterGenderless = document.getElementById("btnfilterGenderless")
 let btnfilterUnknown = document.getElementById("btnfilterUnknown") 
 let btnfirstPage = document.getElementById("firstPage")
 let btnpreviousPage = document.getElementById("previousPage")
 let btnnextPage = document.getElementById("nextPage")
 let btnlastPage = document.getElementById("lastPage")
 
 let personajes;
 let paginaActual = 1;

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
function pedidoFetch (pages) {
    fetch("https://rickandmortyapi.com/api/character/?page=" +pages) 
    .then((data) => {
       return data.json()
   }).then( (data) => {
       personajes = data.results;
   mostrarEnElHtml(personajes);
   })
}
pedidoFetch(paginaActual)

function filterFemale () {
let women = personajes.filter((itemPersonajes) =>{
    return itemPersonajes.gender==="Female";
});
mostrarEnElHtml(women)
};

function filterMale () {
    let man = personajes.filter((itemPersonajes) =>{
        return itemPersonajes.gender==="Male";
    });
mostrarEnElHtml(man)
};
//  function filterGenderless () {
//     let Genderless = personajes.filter((itemPersonajes) =>{
//          return itemPersonajes.gender==="Genderless";
//     });
//  mostrarEnElHtml(Genderless)
//  };
//  function filterUnknown () {
//      let unknown = personajes.filter((itemPersonajes) =>{
//          return itemPersonajes.gender==="unknown";
//      });
//      mostrarEnElHtml(unknown)
//   };

function filterAll () {
    mostrarEnElHtml(personajes);
}

btnfilterFemale.addEventListener("click",filterFemale);
btnfilterMale.addEventListener("click", filterMale);
// btnfilterGenderless.addEventListener("click", filterGenderless);
// btnfilterUnknown.addEventListener("click", filterUnknown);
btnfilterAll.addEventListener("click", filterAll);

btnfirstPage.disabled = true;
btnpreviousPage.disabled = true;

function nextPage () {
    paginaActual++;
    if(paginaActual===42){
        btnnextPage.disabled=true;
        btnlastPage.disabled=true;
    }else{
        btnpreviousPage.disabled=false;
        btnfirstPage.disabled=false;
    }
    pedidoFetch(paginaActual)
}
function previousPage () {
    paginaActual--;
    if(paginaActual===1){
        btnfirstPage.disabled=true;
        btnpreviousPage.disabled=true;
    }else{
        btnnextPage.disabled=false;
        btnfirstPage.disable=false;
        btnlastPage.disabled=false;
        btnnextPage.disabled=false;
    }
    pedidoFetch(paginaActual)
}
function firstPage () {
    paginaActual=1;
    if(paginaActual=1){
        btnpreviousPage.disabled =true;
        btnfirstPage.disabled =true;
        btnnextPage.disabled=false;
        btnlastPage.disabled=false;
    }
    pedidoFetch(1)
}
function lastPage () {
    paginaActual=42;
    if(paginaActual===42){
        btnlastPage.disabled=true;
        btnnextPage.disabled=true;
        btnpreviousPage.disabled=false;
        btnfirstPage.disabled=false;
    }
    pedidoFetch(paginaActual)
}

btnnextPage.addEventListener("click",nextPage );
btnpreviousPage.addEventListener("click", previousPage);
btnfirstPage.addEventListener("click", firstPage);
btnlastPage.addEventListener("click", lastPage);

