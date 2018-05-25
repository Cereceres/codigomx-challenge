const assert = require('assert');

const User = require('../../../models/user.model');


describe('test to delete user', () => {
    it('should the return the user saved in db', async() => {
        const userCreated = await User.create({
            username:'test-delete-user',
            password:'test-to-delete',
        });

        await User.update({ user_id: userCreated.id.toString() }, { id:userCreated.id });
        const { body } = await agent.post('/api/auth')
            .send({
                username:'test-delete-user',
                password:'test-to-delete',
            })
            .expect(200);
        await agent
            .delete(`/api/user/${userCreated.id}`)
            .set({ Authorization: `Bearer ${body.token}` })
            .expect(200);
        const userdeleted = await User.find({ user_id: userCreated.id.toString() });
        assert(userdeleted.length === 0);
    });
});
