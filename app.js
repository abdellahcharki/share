const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')
const app = express();
const moment = require('moment');
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
 

app.locals.moment = moment;
// app.locals.parser = util.ejsParser;
moment.locale('en');

app.use( bodyParser.json());       
app.use(bodyParser.urlencoded({ 
  extended: true
}));  


app.use(express.static(path.join(__dirname, "public")));




app.set("views", "views");
app.set("view engine", "ejs");


const _home = require("./routers/index.route")

////////////////////////////////////

app.use("/",_home);

app.listen(8800, () => console.log("server run on port ", 8800));