const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./router/user.router');

const PORT = process.env.PORT;
const app = express();


const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use('/app', userRouter);

if (!module.parent) app.listen(PORT, () => console.log('Listen in port : ', PORT));

module.exports = app;
