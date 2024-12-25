const express = require("express");
const app = express();

app.set("views engine", "ejs");
app.use(express.static('./public'));


app.get("/error", function (req, res){
   throw Error("i dont know")
});


app.get("/error", function (req, res, next){
    throw Error("somethng went wrong");
});


app.get("/contact", function (req, res){
    res.render("contact.ejs", {name : "Himanshu"});
});

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error.ejs', { error: err })
  });


app.listen(3000);