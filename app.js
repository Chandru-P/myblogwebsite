const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postsRoutes = require('./backend/routes/posts');




const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/blogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/posts', postsRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
