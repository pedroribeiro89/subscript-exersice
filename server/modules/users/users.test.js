const request = require("../../tests/util/httpRequests");

const getBody = response => response.body;

describe(`Todo-Backend API residing at http://localhost:${process.env.PORT}/users`, () => {

    let user;

    it("the api users responds to a POST creating an user", async () => {
        const requestBody = { "name": "Test user" };
        const createdUser = await request.post('/users', requestBody).then(getBody);
        user = createdUser;
        expect(createdUser).toMatchObject(expect.objectContaining(requestBody));
    });

    //get user
    it("the api users/:id responds to a GET with the user of the id", async () => {
        const responseUser = await request.get('/users/' + user.id).then(getBody);
        expect(responseUser).toMatchObject({ id: user.id, name: user.name });
    });

});