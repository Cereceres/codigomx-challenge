const assert = require('assert');

const User = require('../../../models/user.model');


describe('test to put user', () => {
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
            .put(`/api/user/${userCreated.id}`)
            .set({ Authorization: `Bearer ${body.token}` })
            .send({
                username:'test-post-updated',
            })
            .expect(200);
        const userUpdated = await User.find({ user_id: userCreated.id.toString() });
        assert(userUpdated[0].username === 'test-post-updated');
    });
});
