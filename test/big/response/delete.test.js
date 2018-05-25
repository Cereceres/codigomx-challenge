const assert = require('assert');

const Response = require('../../../models/response.model');


describe('test to get response', () => {
    it('should the return the response saved in db', async() => {
        const response = await Response.create({
            post_id:'3',
            user_id: '2',
            response_id: '2',
            response_content:'something here'
        });
        await agent
            .delete(`/api/response/${response.id}`)
            .set({ Authorization: `Bearer ${token}` })
            .expect(200);
        const responsedeleted = await Response.find({ response_id: '2' });
        assert(responsedeleted.length === 0);
    });
});
