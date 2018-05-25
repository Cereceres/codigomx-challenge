const assert = require('assert');

const Response = require('../../../models/response.model');
const Post = require('../../../models/post.model');


describe('test to get response', () => {
    it('should the return the response saved in db', async() => {
        const res = await Post.create({
            post_id:'3000',
            user_id: '1',
            post_content:'post_content'
        });
        const { body } = await agent.post('/api/response')
            .send({
                post_id:'3000',
                user_id: '2',
                response_id: '0',
                response_content:'something here'
            })
            .expect(200);
        assert(body.response_id === '0');
        const response = await Response.find({ response_id: '0' });
        const posts = await Post.find({ post_id: '3000' });
        assert(response[0].response_id === '0');
        assert(posts[0].responses_count === 1);
    });
});
