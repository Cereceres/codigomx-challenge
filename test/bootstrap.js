const supertest = require('supertest');
const User = require('../models/user.model');
const Response = require('../models/response.model');
const Post = require('../models/post.model');
const getServer = require('../index');


before(async() => {
    const server = await getServer();
    global.agent = supertest(server);
});


after(async() => {
    await User.delete({});
    await Response.delete({});
    await Post.delete({});
});
