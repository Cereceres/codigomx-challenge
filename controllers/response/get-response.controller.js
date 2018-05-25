const Response = require('../../models/response.model');

module.exports = (req, res, next) => (async() => {
    const query = req.params.id ? { id:req.params.id } : req.query;

    const response = await Response.find(query);

    res.json(response);
})()
    .catch(({ message }) => res.status(400).json({ message }));
