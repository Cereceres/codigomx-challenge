const assert = require('assert');

const User = require('../../../models/user.model');

describe('test to get user', () => {
    it('should the return the user saved in db', async() => {
        await User.create({
            username: 'test-auth',
            password: 'test'
        });
        const { body } = await agent
            .post('/api/auth')
            .send({
                username:'test-auth',
                password:'test',
            })
            .expect(200);
        assert(body.token);
    });

    it('should return 400 if pass is wrong', async() => {
        await User.create({
            username: 'test-auth',
            password: 'test'
        });
        await agent
            .post('/api/auth')
            .send({
                username:'test-auth',
                password:'testWrong',
            })
            .expect(400);
    });

    it('should return 404 if user does not exists', async() => {
        await User.create({
            username: 'test-auth',
            password: 'test'
        });
        await agent
            .post('/api/auth')
            .send({
                username:'test-does-not-exists',
                password:'testWrong',
            })
            .expect(404);
    });
});
