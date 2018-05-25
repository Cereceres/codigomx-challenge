const User = require('../../models/user.model');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'shhhhh';

module.exports = (req, res) => (async() => {
    const { username, password } = req.body || {};
    const [ user ] = await User.find({ username });

    if (!user) return res
        .status(404)
        .send();

    if (user.password !== new Buffer(password).toString('base64')) return res
        .status(400)
        .send();

    const token = jwt.sign(user, secret);
    res.json({ token });
})()
    .catch(({ message }) => res.status(400).json({ message }));
