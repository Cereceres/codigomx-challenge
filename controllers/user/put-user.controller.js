const User = require('../../models/user.model');

module.exports = (req, res, next) => (async() => {
    const query = req.params.id ? { id:req.params.id } : req.query;
    const data = req.body || {};

    const response = await User.update(data, query);

    res.json(response);
})()
    .catch(({ message }) => res.status(400).json({ message }));
