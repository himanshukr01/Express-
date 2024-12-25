const express = require('express');
const app = express();


app.use(function (req, res, next){
    console.log("middle ware");
 next();
});



app.use(function (req, res, next){
    console.log("middle ware 2");
 next();
});
 


app.get('/', function (req, res) {
  res.send('Hello World');
});


app.get('/profile', function (req, res) {
    res.send('Hello World Pofile');
  });


  app.get('/profile/harsh', function (req, res) {
    res.send('Hello from harsh');
  });


  app.get('/profile/:username', function (req, res) {
    res.send(`Hello from ${req.params.username}`);
  });



app.listen(3000);