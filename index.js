const express = require('express');
const bodyParser = require('body-parser');

const jwt = require('./lib/jwt');
const database = require('./database');
const userRouter = require('./router/user.router');
const postRouter = require('./router/post.router');
const responseRouter = require('./router/response.router');
const authRouter = require('./router/auth.router');

const PORT = process.env.PORT;
const app = express();
const jsonParser = bodyParser.json();

app.use(jwt());
app.use(jsonParser);
app.use('/api', userRouter);
app.use('/api', postRouter);
app.use('/api', responseRouter);
app.use('/api', authRouter);

if (!module.parent) app.listen(PORT, () => console.log('Listen in port : ', PORT));

module.exports = async() => {
    await database.connect();
    return app;
};
