const supertest = require('supertest');
const User = require('../models/user.model');
const getServer = require('../index');


before(async() => {
    const server = await getServer();
    global.agent = supertest(server);
});


after(async() => {
    await User.delete({});
});
