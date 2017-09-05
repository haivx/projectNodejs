const express =require('express');
const app = express();
const {db, } = require('./pgp');
const bodyParser = require ('body-parser');
const session = require('express-session');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use (bodyParser.urlencoded ({
	extended: true
}));
app.use (bodyParser.json());

//Configure Static file
app.use('/public', express.static('public'))

// Configure Router
const index = require('./routes/index')(express);
app.use('/',index)



const port = 3000;
app.listen(port, () => {
    console.log('Ready for GET requests on http://localhost:' + port);
});
