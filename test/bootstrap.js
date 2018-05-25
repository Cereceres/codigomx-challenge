const supertest = require('supertest');
const User = require('../models/user.model');
const Response = require('../models/response.model');
const Post = require('../models/post.model');
const getServer = require('../index');


before(async() => {
    const server = await getServer();
    global.agent = supertest(server);
    global.user = await User.create({
        username: 'testing',
        password: 'test'
    });
    const { body } = await agent.post('/api/auth')
        .send({
            username:'testing',
            password:'test',
        })
        .expect(200);
    global.token = body.token;
});


after(async() => {
    await User.delete({});
    await Response.delete({});
    await Post.delete({});
});
