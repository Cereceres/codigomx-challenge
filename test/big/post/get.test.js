const assert = require('assert');

const Post = require('../../../models/post.model');


describe('test to get post', () => {
    it('should the return the post saved in db', async() => {
        await Post.create({
            post_id:'2',
            user_id: '2',
            post_content:'something here'
        });
        const { body } = await agent.get('/api/post')
            .query({ post_id:'2' })
            .expect(200);
        assert(body[0].post_id === '2');
    });
});
