const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/:commonWord', function(req, res) {
  res.send(req.params.commonWord);
});

app.get('/error', function(req, res) {
  res.status(403).send();
});

app.listen(port, () => console.log(`server is connected on ${port}!`));
