const User = require('./../../app/models/User')

describe("Unit Test for User class", () =>{
    test('Create an User object', () =>{
        //Aquí se invoca el código que usara la app
        const user = new User(1, "GrisGGG", "Gris", "Bio");

        //Aquí se validadn los resultados de ese código
        expect(user.id).toBe(1)
        expect(user.username).toBe("GrisGGG")
        expect(user.name).toBe("Gris")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined() //not.toBeUndefined() verifica que el valor no sea undefine o vacio
        expect(user.lastUpdated).not.toBeUndefined()
    });
    test('Add getters', () => {
        const user1 = new User(1, "carlogilmar", "Carlo", "Bio")
        expect(user1.getUsername).toBe("carlogilmar")
        expect(user1.getBio).toBe("Bio")
        expect(user1.getDateCreated).not.toBeUndefined()
        expect(user1.lastUpdated).not.toBeUndefined()
    });
})

