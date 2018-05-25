const assert = require('assert');

const User = require('../../../models/user.model');


describe('test to post user', () => {
    it('should the return the user saved in db', async() => {
        const { body } = await agent.post('/api/user')
            .send({
                username:'test-post',
                password:'test',
            })
            .expect(200);
        assert(body.user_id);
        const user = await User.find({ user_id: body.user_id });
        assert(user[0].user_id === body.user_id);
    });

    it('should the return 400 if password is not sent', async() => {
        const { body } = await agent.post('/api/user')
            .send({
                user_id: '4',
                username:'test-post',
            })
            .expect(400);
    });
});
