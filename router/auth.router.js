const validater = require('validater-express-acme');
const joi = require('joi');
const express = require('express');
const controller = require('../controllers/auth');

const router = express.Router();
const authSchema = joi.object().keys({
    body: joi.object().keys({
        username: joi.string().required(),
        password: joi.string().required(),
    }),
    params: joi.object(),
    query: joi.object()
});


router.post('/auth', validater(authSchema), controller.post);

module.exports = router;
