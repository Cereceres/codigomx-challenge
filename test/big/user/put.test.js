const assert = require('assert');

const User = require('../../../models/user.model');


describe('test to get user', () => {
    it('should the return the user saved in db', async() => {
        const user = await User.create({
            user_id: '5',
            username:'test-put',
            password:'test',
        });
        const { body } = await agent
            .put(`/api/user/${user.id}`)
            .set({ Authorization: `Bearer ${token}` })
            .send({
                username:'test-post-updated',
            })
            .expect(200);
        const userUpdated = await User.find({ user_id: '5' });
        assert(userUpdated[0].username === 'test-post-updated');
    });
});
