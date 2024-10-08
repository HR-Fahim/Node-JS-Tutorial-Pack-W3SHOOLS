const express = require('express');
const app = express();
const port = 3000;

app.use(express.raw());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  
  console.log(req.body.toString());

  res.send('POST request to the homepage');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
