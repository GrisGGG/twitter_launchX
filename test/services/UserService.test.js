const UserService =  require('./../../app/services/UserService')
describe("Test for UserService", () =>{
    test("1. Create a new user using the UserService", () =>{
        const user = UserService.create(1, "grisGGG", "Gris")
        expect(user.username).toBe("grisGGG")
        expect(user.name).toBe("Gris")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    });
    test("2. Get all user data in a list", () =>{
        const user = UserService.create(1, "grisGGG", "Gris")
        const userInfoInList = UserService.getInfo(user)
            expect(userInfoInList[0]).toBe(1) 
            expect(userInfoInList[1]).toBe("grisGGG")  
            expect(userInfoInList[2]).toBe("Gris")
            expect(userInfoInList[3]).toBe("Sin bio")               
    });
    test("3. Update usernae", () =>{
        const user = UserService.create(1, "grisGGG", "Gris")
        UserService.updateUserUsername(user, "grisG")    
        expect(user.username).toBe("grisG")  
    });
    test("4. Given a list of users give me the list of usernames", () =>{
        const user1 = UserService.create(1, "grisGGG1", "Gris")
        const user2 = UserService.create(1, "grisGGG2", "Gris")
        const user3 = UserService.create(1, "grisGGG3", "Gris")
        const usernames = UserService.getAllUsername([user1, user2, user3])
            expect(usernames).toContain("grisGGG1") 
            expect(usernames).toContain("grisGGG2") 
            expect(usernames).toContain("grisGGG3")                    
    });   
})

