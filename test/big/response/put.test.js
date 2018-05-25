const assert = require('assert');

const Response = require('../../../models/response.model');


describe('test to get response', () => {
    it('should the return the response saved in db', async() => {
        const response = await Response.create({
            post_id:'3',
            user_id: '2',
            response_id: '10',
            response_content:'something here'
        });
        const { body } = await agent.put(`/api/response/${response.id}`)
            .send({
                response_content:'something here-updated',
            })
            .expect(200);
        const responseUpdated = await Response.find({ response_id: '10' });
        assert(responseUpdated[0].response_content === 'something here-updated');
    });
});
