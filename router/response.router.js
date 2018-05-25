const validater = require('validater-express-acme');
const joi = require('joi');
const express = require('express');
const controller = require('../controllers/response');

const router = express.Router();
const postSchema = joi.object().keys({
    body: joi.object().keys({
        post_id: joi.string().required(),
        response_id: joi.string().required(),
        response_content: joi.string().required(),
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
        response_id: joi.string(),
        response_content: joi.string(),
    }),
    params: joi.object(),
    query: joi.object()
});

const deleteSchema = joi.object().keys({
    body: joi.object(),
    params: joi.object(),
    query: joi.object()
});


router.get('/response/:id?', validater(getSchema), controller.get);
router.post('/response', validater(postSchema), controller.post);
router.put('/response/:id?', validater(putSchema), controller.put);
router.delete('/response/:id?', validater(deleteSchema), controller.delete);

module.exports = () => router;
