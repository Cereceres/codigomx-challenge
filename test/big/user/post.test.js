const assert = require('assert');

const User = require('../../../models/user.model');


describe('test to get user', () => {
    it('should the return the user saved in db', async() => {
        const { body } = await agent.post('/api/user')
            .send({
                user_id: '4',
                username:'test-post',
                password:'test',
            })
            .expect(200);
        assert(body.user_id === '4');
        const user = await User.find({ user_id: '4' });
        assert(user[0].user_id === '4');
    });
});
