const express = require("express");
const app = express();
var logger = require('morgan');
var methodOverride = require("method-override")
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser'); 
const path = require("path")
const con = require("./config/db.js")

app.use(express.static(path.join(__dirname, 'assets')));  

app.use(logger('dev'));
app.use(cookieParser());

// Using pug template engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

var opn = require('opn');

// connecting route to database
app.use(function(req, res, next) {
  req.con = con
  next()
})

// parsing body request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

// include router for home
const homeRouter = require("./routes/homeRouter.js")
// routing for /home
app.use("/home", homeRouter)


// include router for data provinsi
const dataprovinsiRouter = require("./routes/dataprovinsiRouter.js")
// routing for /dataprovinsi
app.use("/dataprovinsi", dataprovinsiRouter)

// include router for data kota
const datakotaRouter = require("./routes/datakotaRouter.js")
// routing for /datakota
app.use("/datakota", datakotaRouter)

// include router for data hotel
const datahotelRouter = require("./routes/datahotelRouter.js")
// routing for /datahotel
app.use("/datahotel", datahotelRouter)

// include router for data reviewer
const datareviewerRouter = require("./routes/datareviewerRouter.js")
// routing for /datahotel
app.use("/datareviewer", datareviewerRouter)

// include router for data transaksi
const datatransaksiRouter = require("./routes/datatransaksiRouter.js")
// routing for /datahotel
app.use("/datatransaksi", datatransaksiRouter)

// starting server
app.listen(3000, function() {
  console.log("server listening on port 3000")
})
