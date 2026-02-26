const express = require('express');
const user = require('./src/user');
const list = require('./src/list');
const LoggerMiddleware = require('./middleware/logger');
const app = express();

app.use(express.json());
app.use(LoggerMiddleware)
app.use('/user', user)
app.use('/list', list);
app.listen(3000, () => {
  console.log('Server is running on port 3000...');
});
