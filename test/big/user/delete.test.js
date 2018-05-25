const assert = require('assert');

const User = require('../../../models/user.model');


describe('test to get user', () => {
    it('should the return the user saved in db', async() => {
        const user = await User.create({
            user_id: '6',
            username:'test-put',
            password:'test',
        });
        await agent
            .delete(`/api/user/${user.id}`)
            .set({ Authorization: `Bearer ${token}` })
            .expect(200);
        const userdeleted = await User.find({ user_id: '6' });
        assert(userdeleted.length === 0);
    });
});
