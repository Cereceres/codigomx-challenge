const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database');
const userRouter = require('./router/user.router');

const PORT = process.env.PORT;
const app = express();


const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use('/api', userRouter);

if (!module.parent) app.listen(PORT, () => console.log('Listen in port : ', PORT));

module.exports = async() => {
    await database.connect();
    return app;
};
