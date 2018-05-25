const assert = require('assert');

const Post = require('../../../models/post.model');


describe('test to get post', () => {
    it('should the return the post saved in db', async() => {
        const post = await Post.create({
            post_id:'3',
            user_id: '2',
            post_content:'something here'
        });
        await agent.delete(`/api/post/${post.id}`)
            .set({ Authorization: `Bearer ${token}` })
            .expect(200);
        const postdeleted = await Post.find({ post_id: '3' });
        assert(postdeleted.length === 0);
    });
});
