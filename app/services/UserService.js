const User = require('./../models/User')
 //Requeriment 1
class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
    //Requeriment 3
    static getInfo(user){
        return [user.id, user.username, user.name, user.bio, user.dateCreated, user.lastUpdate]
    }
    //Requeriment 3
    static updateUserUsername(user, name){
        return user.username = name
    }
}
module.exports = UserService