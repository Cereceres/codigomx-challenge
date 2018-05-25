const assert = require('assert');

const User = require('../../../models/user.model');


describe('test to get user', () => {
    it('should the return the user saved in db', async() => {
        await User.create({
            user_id: '3',
            username:'test',
            password:'test',
        });
        const { body } = await agent.get('app/user')
            .query({ user_id:'3' })
            .expect(200);
        assert(body.user_id === '3');
    });
});
