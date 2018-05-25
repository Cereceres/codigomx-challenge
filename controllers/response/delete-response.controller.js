const Response = require('../../models/response.model');

module.exports = (req, res) => (async() => {
    const query = req.params.id ? { id:req.params.id } : req.query;
    query.user_id = req.user.id.toString();
    const response = await Response.delete(query);
    res.json(response);
})()
    .catch(({ message }) => res.status(400).json({ message }));
