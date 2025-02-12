// Create web server
// Create a new web server using express
const express = require('express');
const app = express();
// Create a web server that listens on port 3000
app.listen(3000, () => {
  console.log('Web server is running');
});