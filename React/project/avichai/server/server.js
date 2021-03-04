const express = require('express')
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('../client/public'))



const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`listen on port ${port}`) })
