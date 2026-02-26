const express = require('express');


const app = express();

app.use(express.json());
app.use((req,res,next)=>{
  res.set('Access-Control-Allow-Origin', '*');
  next()
})

app.get('/get', (req, res) => {
  console.log('get request');
  
  res.send('GET');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000...');
});
