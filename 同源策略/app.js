const express = require('express');


const app = express();

app.use(express.json());
app.use((req,res,next)=>{
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.set('Lai-Header', 'lai')
  res.set('Access-Control-Expose-Headers', 'Lai-Header')
  next()
})

app.get('/get', (req, res) => {
  console.log('get request');
  res.send('GET');
});

app.delete('/delete', (req, res) => {
  console.log('delete request');
  res.send('DELETE');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000...');
});
