const express = require("express");
const app = express();
const cors = require('cors');
const port = 5000;

// middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
app.use(cors());
app.use(logger);
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// session handler
const session = require("express-session");
app.use(
  session({
    secret: "Akses khusus admin",
    resave: false,
    saveUninitialized: false,
  })
);

// passport local
const passportLocal = require('./lib/passportLocal');
app.use(passportLocal.initialize());
app.use(passportLocal.session());

// passport JWT
const passport = require("./lib/passport");
app.use(passport.initialize());

// flash
const flash = require("express-flash");
app.use(flash());

// menggunakan view engine ejs
app.set("view engine", "ejs");

// route
const router = require("./router");
const apiRouter = require("./routers");
app.use(router);
app.use(apiRouter);

// nyalakan web server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
