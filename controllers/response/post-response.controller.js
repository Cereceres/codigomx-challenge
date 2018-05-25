const Response = require('../../models/response.model');
const Post = require('../../models/post.model');


module.exports = (req, res, next) => (async() => {
    const data = req.body || {};
    const response = await Response.create(data);
    const { post_id } = data;
    console.log('post_id ', post_id);
    const responses_count = await Response.count({ post_id });
    console.log('response_count', responses_count);
    await Post.update({ responses_count }, { post_id });
    res.json(response);
})()
    .catch(({ message }) => res.status(400).json({ message }));
