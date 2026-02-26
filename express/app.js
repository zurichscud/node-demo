const express = require('express');
const user = require('./src/user');
const list = require('./src/list');
const LoggerMiddleware = require('./middleware/logger');
const PreventHotLinking = require('./middleware/preventHotLinking');
const app = express();

app.use(express.json());
app.use(PreventHotLinking)
app.use('/assets',express.static('static'))
app.use(LoggerMiddleware)
app.use('/user', user)
app.use('/list', list);
app.listen(3000, () => {
  console.log('Server is running on port 3000...');
});
