const assert = require('assert');

const Post = require('../../../models/post.model');


describe('test to get post', () => {
    it('should the return the post saved in db', async() => {
        const { body } = await agent.post('/api/post')
            .send({
                post_id:'1',
                user_id: '2',
                post_content:'something here'
            })
            .expect(200);
        console.log('biody ', body);
        assert(body.post_id === '1');
        const post = await Post.find({ post_id: '1' });
        assert(post[0].post_id === '1');
    });
});