const Response = require('../../models/response.model');
const Post = require('../../models/post.model');

module.exports = (req, res, next) => (async() => {
    const query = req.query || req.params.id && { _id:req.params.id } || {};
    const data = req.body || {};
    const { post_id } = data;
    const response = await Response.update(data, query);

    if (!post_id) return res.json(response);

    const responses_count = await Response.count({ post_id });
    await Post.update({ responses_count }, { post_id });
    res.json(response);
})()
    .catch(({ message }) => res.status(400).json({ message }));
