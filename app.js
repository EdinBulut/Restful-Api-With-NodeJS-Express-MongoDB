const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
require('dotenv').config()
// require('dotenv').config({path: __dirname + '/.env'});


// MIDDLEWARES
// app.use('/posts', (req, res, next) => {
//   console.log('This is a middleware running');
//   next();
// })

// IMPORT ROUTES
app.use('/posts', require('./routes/posts'));

// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home page')
})


// CONNECT TO DB
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false})
.then(()=>{
  console.log('Skonto sam te!!!');
  // console.log(require('dotenv').config());
  // console.log(require('dotenv').config().parsed.MONGODB_URI);
  // console.log(process.env.MONGODB_URI);
})
.catch((err)=>{
  console.log(`there is a problem with ${err.message}`);
  process.exit(-1)
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

