const validater = require('validater-express-acme');
const joi = require('joi');
const express = require('express');
const controller = require('../controllers/post');

const router = express.Router();
const postSchema = joi.object().keys({
    body: joi.object().keys({
        post_id: joi.string().required(),
        post_content: joi.string().required(),
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
        post_id: joi.string(),
        post_content: joi.string(),
    }),
    params: joi.object(),
    query: joi.object()
});

const deleteSchema = joi.object().keys({
    body: joi.object(),
    params: joi.object(),
    query: joi.object()
});


router.get('/post/:id?', validater(getSchema), controller.get);
router.post('/post', validater(postSchema), controller.post);
router.put('/post/:id?', validater(putSchema), controller.put);
router.delete('/post/:id?', validater(deleteSchema), controller.delete);

module.exports = () => router;
