const supertest = require('supertest');

const server = require('../index');


before(async() => {
    global.agent = supertest(server);
});
