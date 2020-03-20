const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3030;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, (error)=> {
    if(error) console.error(error) 

    console.log(`Server runing on port ${port}`)
});
