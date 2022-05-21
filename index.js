const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();
PORT = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get("/", (req, res)=>{
	res.send("Welcome to Ourpoint Backend.")
})


app.listen(PORT, ()=>{
	console.log(`Server is running on port: ${PORT}`)
});