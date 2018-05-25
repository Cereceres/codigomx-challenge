const assert = require('assert');

const Response = require('../../../models/response.model');


describe('test to get response', () => {
    it('should the return the response saved in db', async() => {
        const { body } = await agent.post('/api/response')
            .send({
                post_id:'3',
                user_id: '2',
                response_id: '0',
                response_content:'something here'
            })
            .expect(200);
        assert(body.response_id === '0');
        const response = await Response.find({ response_id: '0' });
        assert(response[0].response_id === '0');
    });
});
