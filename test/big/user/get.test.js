const assert = require('assert');

const User = require('../../../models/user.model');


describe('test to get user', () => {
    it('should the return the user saved in db', async() => {
        const { body } = await agent.get(`/api/user/${user.id}`)
            .query({ user_id:'3' })
            .set({ Authorization: `Bearer ${token}` })
            .expect(200);
        console.log('body ', body);
        assert(body[0].user_id === user.id.toString());
    });
});
