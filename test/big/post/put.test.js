const assert = require('assert');

const Post = require('../../../models/post.model');


describe('test to get put', () => {
    it('should the return the post saved in db', async() => {
        const post = await Post
            .create({
                post_id:'4',
                post_content:'something here',
                user_id: user.id,
            });
        const { body } = await agent
            .put(`/api/post/${post.id}`)
            .set({ Authorization: `Bearer ${token}` })
            .send({
                post_content:'something here update'
            })
            .expect(200);
        const postUpdated = await Post.find({ post_id: '4' });
        assert(postUpdated[0].post_content === 'something here update');
    });
});
