const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');
const userRouter = require('./router/user.router');
const postRouter = require('./router/post.router');
const responseRouter = require('./router/response.router');

const PORT = process.env.PORT;
const app = express();


const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use('/api', userRouter);
app.use('/api', postRouter);
app.use('/api', responseRouter);

if (!module.parent) app.listen(PORT, () => console.log('Listen in port : ', PORT));

module.exports = async() => {
    await database.connect();
    return app;
};
