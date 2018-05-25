const assert = require('assert');

const Response = require('../../../models/response.model');
const Post = require('../../../models/post.model');


describe('test to get response', () => {
    it('should the return the response saved in db', async() => {
        await Post.create({
            post_id:'4444',
            user_id: '1',
            post_content:'post_content'
        });
        const response = await Response.create({
            post_id:'4',
            user_id: '2',
            response_id: '10',
            response_content:'something here'
        });
        await agent
            .put(`/api/response/${response.id}`)
            .set({ Authorization: `Bearer ${token}` })
            .send({
                post_id:'4444',
                response_content:'something here-updated',
            })
            .expect(200);
        const responseUpdated = await Response.find({ response_id: '10' });
        assert(responseUpdated[0].response_content === 'something here-updated');
        const posts = await Post.find({ post_id: '4444' });
        assert(posts[0].responses_count === 1);
    });
});
