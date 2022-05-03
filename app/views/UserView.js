/*Clase llamada `UserView`que interactua con el modelo `User` a través de `userService`.
    Crea un método en esta clase llamado `create User` que sirva para crear un nuevo objeto user 
    a partir de un `payload`, quiero decir un objeto que contenga información para crearlo.
 */
const UserService = require('./../../app/services/UserService')
class UserView{
 // Requeriment 5.1
/*1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` 
y el valor indique `payload no existe`. */
    static createUser(payload ){
        if(payload === null){
            const error = {error: "payload no existe"}
            return error
        }
//Requeriment 5.1 2     
/*Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. 
Si hay un valor `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.*/
        if(!payload.id || !payload.username || !payload.name ){
           const error = {error: "necesitan tener un valor válido"}
            return error;
        }
//Requeriment 5.1 3
/*Valida que un `payload` con algunas de las propiedades necesarias regrese un objeto con la llave `error`
indicando `necesitan tener un valor válido`. */
        if(!payload.id || !payload.username || !payload.name == null){
        const error = {error: "necesitan tener un valor válido"}
        return error;
        }




}
}

module.exports = UserView


