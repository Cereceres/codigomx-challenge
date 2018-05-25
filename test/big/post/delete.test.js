const assert = require('assert');

const Post = require('../../../models/post.model');


describe('test to get delete', () => {
    it('should the return the post saved in db', async() => {
        const post = await Post.create({
            user_id: user.id,
            post_id:'3',
            post_content:'something here'
        });
        await agent.delete(`/api/post/${post.id}`)
            .set({ Authorization: `Bearer ${token}` })
            .expect(200);
        const postdeleted = await Post.find({ post_id: '3' });
        assert(postdeleted.length === 0);
    });

    it('should the return the post saved in db', async() => {
        const post = await Post.create({
            user_id: '332423423',
            post_id:'332423423',
            post_content:'something here'
        });
        await agent.delete('/api/post')
            .query({
                post_id:'332423423'
            })
            .set({ Authorization: `Bearer ${token}` })
            .expect(200);
        const postdeleted = await Post.find({ post_id: '332423423' });
        assert(postdeleted.length === 1);
    });
});
