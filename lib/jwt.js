const jwt = require('express-jwt');
const unless = require('express-unless');

const secret = process.env.JWT_SECRET || 'shhhhh';
const middleware = jwt({ secret });
middleware.unless = unless;
const pathUnProtected = process.env.PATH_UNPROTECTED || [
    {
        url: '/api/user',
        methods: [ 'POST' ]
    },
    {
        url: '/api/auth',
        methods: [ 'POST' ]
    },
];
module.exports = middleware.unless({ path:  pathUnProtected });
