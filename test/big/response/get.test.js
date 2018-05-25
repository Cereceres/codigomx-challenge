const assert = require('assert');

const Response = require('../../../models/response.model');


describe('test to get response', () => {
    it('should the return the response saved in db', async() => {
        await Response.create({
            post_id:'3',
            user_id: '2',
            response_id: '1',
            response_content:'something here'
        });
        const { body } = await agent.get('/api/response')
            .query({ response_id:'1' })
            .expect(200);
        assert(body[0].response_id === '1');
    });
});
