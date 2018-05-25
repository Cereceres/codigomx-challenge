const Post = require('../../models/post.model');

module.exports = (req, res, next) => (async() => {
    const query = req.query || req.params.id && { _id:req.params.id } || {};

    const response = await Post.delete(query);

    res.json(response);
})()
    .catch(({ message }) => res.status(400).json({ message }));
