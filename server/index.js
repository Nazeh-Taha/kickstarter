const express = require("express");
const bodyParser = require("body-parser");
const ProjectDB = require("../database/db.js");
const path = require("path");
const cors = require('cors');

const app = express();
//app.use(express.static(path.join(__dirname, "../public")));

app.use(bodyParser.json());
app.use(cors())

// app.use(function (req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', '*');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

// //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

//   // Pass to next layer of middleware
//   next();
// });
app.get("/", function(req, res) {
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
  // res.setHeader('Access-Control-Allow-Origin', '*');
  ProjectDB.Project.find({}).limit(10)
    .then(data => {
      //console.log(data);
      res.json(data);
    })
    .catch(err => console.log(err));
  
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Listening to  http://localhost:${PORT} ...`)
);