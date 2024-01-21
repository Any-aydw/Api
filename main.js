
 let characterDiv = document.getElementById("characterDiv")
 let btnfilterAll = document.getElementsByClassName("btnfilterAll")
 let btnfilterFemale = document.getElementsByClassName("btnfilterFemale")
 let btnfilterMale = document.getElementsByClassName("btnfilterMale")
 let btnfilterGenderless = document.getElementsByClassName("btnfilterGenderless")
 let btnfilterUnknown = document.getElementsByClassName("btnfilterUnknown") 
 let btnfirstPage = document.getElementById("firstPage")
 let btnpreviousPage = document.getElementById("previousPage")
 let btnnextPage = document.getElementById("nextPage")
 let btnlastPage = document.getElementById("lastPage")
 
 let personajes;
 let paginaActual = 1;
 
 const hamburguesa = document.getElementById("hamburguesa");
 const hamburguesaUl = document.getElementById("hamburguesa-ul");

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
 function filterGenderless () {
     let Genderless = personajes.filter((itemPersonajes) =>{
        return itemPersonajes.gender==="Genderless";
    });
  mostrarEnElHtml(Genderless)
 };
 function filterUnknown () {
     let unknown = personajes.filter((itemPersonajes) =>{
          return itemPersonajes.gender==="unknown";
     });
      mostrarEnElHtml(unknown)
   };

function filterAll () {
    mostrarEnElHtml(personajes);
}

btnfilterFemale[0].addEventListener("click",filterFemale);
btnfilterFemale[1].addEventListener("click", filterFemale);
btnfilterMale[0].addEventListener("click", filterMale);
btnfilterMale[1].addEventListener("click", filterMale);
btnfilterGenderless[0].addEventListener("click", filterGenderless);
btnfilterGenderless[1].addEventListener("click", filterGenderless);
btnfilterUnknown[0].addEventListener("click", filterUnknown);
btnfilterUnknown[1].addEventListener("click", filterUnknown);
btnfilterAll[0].addEventListener("click", filterAll);
btnfilterAll[1].addEventListener("click", filterAll);

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

hamburguesa.addEventListener("click", () => {
    if (hamburguesaUl.classList.contains("hidden-ul")) {
      hamburguesaUl.classList.add("show-ul");
      hamburguesaUl.classList.remove("hidden-ul");
    } else if (hamburguesaUl.classList.contains("show-ul")) {
      hamburguesaUl.classList.add("hidden-ul");
      hamburguesaUl.classList.remove("show-ul");
    }
  });
