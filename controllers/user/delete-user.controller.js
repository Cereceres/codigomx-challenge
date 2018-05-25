const User = require('../../models/user.model');

module.exports = (req, res, next) => (async() => {
    const query = req.query || req.params.id && { _id:req.params.id } || {};

    const response = await User.delete(query);

    res.json(response);
})()
    .catch((error) => res.status(400).send(error));
