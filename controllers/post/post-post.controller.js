const Post = require('../../models/post.model');

module.exports = (req, res, next) => (async() => {
    const data = req.body || {};

    data.user_id = req.user.id.toString();

    const response = await Post.create(data);
    await Post.create(data);
    res.json(response);
})()
    .catch(({ message }) => res.status(400).json({ message }));
