const express = require('express');
const app = express();
const port = 3600;
const path = require('path');

var morgan = require('morgan');
morgan('tiny');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const router = require('./routes');
app.use(router);

const mongoose = require('mongoose');
mongoose
  .connect('mongodb://127.0.0.1:27017/NoWear')
  .then(() => console.log('connected'))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log('app listen at ', port);
});
