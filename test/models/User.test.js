const User = require('./../../app/models/User')

describe("Unit Test for User class", () =>{
    test('Create an User object', () =>{
        //Aquí se invoca el código que usara la app
        const user = new User(1, "GrisGGG", "Gris", "Bio", "dateCreated", "lastUpdated");

        //Aquí se validadn los resultados de ese código
        expect(user.id).toBe(1)
        expect(user.username).toBe("GrisGGG")
        expect(user.name).toBe("Gris")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")

    })
})

