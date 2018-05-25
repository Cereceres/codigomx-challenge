const Post = require('../../models/post.model');

module.exports = (req, res, next) => (async() => {
    const query = req.params.id ? { id:req.params.id } : req.query;
    query.user_id = req.user.id.toString();
    const data = req.body || {};
    data.user_id = req.user.id.toString();

    const response = await Post.update(data, query);

    res.json(response);
})()
    .catch(({ message }) => res.status(400).json({ message }));
