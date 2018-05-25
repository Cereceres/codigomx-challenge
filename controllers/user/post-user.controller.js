const User = require('../../models/user.model');

module.exports = (req, res, next) => (async() => {
    const data = req.body || {};
    const response = await User.create(data);
    res.json(response);
})()
    .catch(({ message }) => res.status(400).json({ message }));
