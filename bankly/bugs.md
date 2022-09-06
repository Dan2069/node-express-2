In Line 4 of users.js, the:
    "const router = new express.Router();"
Doesn't need a new instance attached to it, so I deleted the 'new' part.

test('should respond with router as a function' () => {
    expect(typeof router).toBe('function');
})


In Line 84 of users.js, deleted the parameters (users, password) because the function for get all() shouldn't rely on parameters to get all user information.

test('should get all the users info', () => {
    expect(typeOf getall()).toBe('object')
})

