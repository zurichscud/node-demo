const express = require('express');


const app = express();

app.use(express.json());

app.get('/get', (req, res) => {
  res.send('GET');
});

app.post('/post', (req, res) => {
  res.send('POST');
});


app.get('/user/:id', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send('GET');
})

app.post('/user', (req, res) => {
  console.log(req.body);
  res.send('POST');
})


app.listen(3000, () => {
  console.log('Server is running on port 3000...');
});
