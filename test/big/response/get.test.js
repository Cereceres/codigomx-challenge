const assert = require('assert');

const Response = require('../../../models/response.model');


describe('test to get response', () => {
    it('should the return the response saved in db', async() => {
        await Response.create({
            post_id:'3',
            response_id: '1',
            user_id: user.id,
            response_content:'something here'
        });
        const { body } = await agent
            .get('/api/response')
            .set({ Authorization: `Bearer ${token}` })
            .query({ response_id:'1' })
            .expect(200);
        assert(body[0].response_id === '1');
    });
});
