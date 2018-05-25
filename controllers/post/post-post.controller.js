const Post = require('../../models/post.model');

module.exports = (req, res, next) => (async() => {
    const data = req.body || {};
    console.log('data ', data);
    const response = await Post.create(data);
    console.log('response ', response);
    res.json(response);
})()
    .catch(({ message }) => res.status(400).json({ message }));
