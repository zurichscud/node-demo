const express = require('express');


const app = express();
app.listen(3000, () => {
  console.log('Server is running on port 3000...');
});
app.use((req,res,next)=>{
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next()
})

app.get('/sse', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream')
    res.status(200)
    setInterval(() => {
        res.write('event: say\n')
        res.write('data: ' + new Date().getTime() + '\n\n')
    }, 1000)
    setTimeout(() => {
        res.end()
    }, 4000)
});
