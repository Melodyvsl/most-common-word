const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const routes = require('./route/routes');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
// default options
app.use(fileUpload());

app.use(express.static('views'));

app.get('/', (req, res) => {
  res.send('index');
});

const port = process.env.PORT || 3001;

app.use('/', routes);

app.listen(port, () => console.log(`server is connected on ${port}!`));
