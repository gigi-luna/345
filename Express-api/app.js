
const routes = require('./routes/routes');
const express = require(`express`);
const bodyParser = require('body-parser');
const { response } = require('express');
const port = 3002;
const app = express();

//use node body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,

}));

routes(app);

//start server
const server = app.listen(port, (error)=>{
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
})

