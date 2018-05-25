const validater = require('validater-express-acme');
const joi = require('joi');
const express = require('express');
const controller = require('../controllers/user');

const router = express.Router();
const postSchema = joi.object().keys({
    body: joi.object().keys({
        user_id: joi.string().required(),
        username: joi.string().required(),
        password: joi.string().required(),
        created_at: joi.date(),
    }),
    params: joi.object(),
    query: joi.object()
});

const getSchema = joi.object().keys({
    body: joi.object(),
    params: joi.object(),
    query: joi.object()
});

const putSchema = joi.object().keys({
    body: joi.object().keys({
        user_id: joi.string(),
        username: joi.string(),
        password: joi.string(),
        created_at: joi.date(),
    }),
    params: joi.object(),
    query: joi.object()
});

const deleteSchema = joi.object().keys({
    body: joi.object(),
    params: joi.object(),
    query: joi.object()
});


router.get('/user/:id?', validater(getSchema), controller.get);
router.post('/user', validater(postSchema), controller.post);
router.put('/user/:id?', validater(putSchema), controller.put);
router.delete('/user/:id?', validater(deleteSchema), controller.delete);

module.exports = router;
