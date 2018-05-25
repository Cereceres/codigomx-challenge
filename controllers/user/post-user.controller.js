const User = require('../../models/user.model');

module.exports = (req, res, next) => (async() => {
    const data = req.body || {};
    const response = await User.create(data);
    response.user_id = response.id.toString();
    await User.update({ user_id: response.id }, { id:response.id });
    res.json(response);
})()
    .catch(({ message }) => res.status(400).json({ message }));
