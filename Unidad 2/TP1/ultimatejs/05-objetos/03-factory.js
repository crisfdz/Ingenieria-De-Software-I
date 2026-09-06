// let user = {
//     id:1,
//     email: "cristianfer@gmail.com", 
//     name: "Cristian", 
//     activa: true, 
//     recuperarClave: function(){
//         console.log("Recuperando clave...");
//     }, 
// }; 
// let user1 = {
//     id:2,
//     email: "cristiandavid@gmail.com", 
//     name: "Cris", 
//     activa: true, 
//     recuperarClave: function(){
//         console.log("Recuperando clave...");
//     }, 
// }; 

function crearUsuario(name, email){
    return {
    email, 
    name, 
    activa: true, 
    recuperarClave: function(){
        console.log("recuperando clave...");
    }, 
    }; 
}

let user1 = crearUsuario("holaa", "holaa(email)"); 

let user2 = crearUsuario("Criss", "Criss(email)"); 

console.log(user1); 
console.log(user2); 