//pedido a la api 

fetch("https://rickandmortyapi.com/api/character") 
.then((data) => {
return data.json()
}).then( (data) => {
// console.log(data)
})