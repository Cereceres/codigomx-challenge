const assert = require('assert');

const Post = require('../../../models/post.model');


describe('test to get', () => {
    it('should the return the post saved in db', async() => {
        await Post.create({
            user_id: user.id,
            post_id:'2',
            post_content:'something here'
        });
        const { body } = await agent.get('/api/post')
            .query({ post_id:'2' })
            .set({ Authorization: `Bearer ${token}` })
            .expect(200);
        assert(body[0].post_id === '2');
    });
});
