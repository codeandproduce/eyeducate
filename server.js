const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, '/');

var app = express();
var port = process.env.PORT || 3000;

app.use('/', express.static(publicPath));


app.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/about', (req, res)=>{
	res.sendFile(path.join(__dirname + '/about-us.html'));
})

app.get('/events', (req, res)=>{
	res.sendFile(path.join(__dirname + '/events.html'));
})

app.get('/eye-news', (req, res)=>{
	res.sendFile(path.join(__dirname + '/eye-news.html'));
})



app.listen(port, () => {
	console.log("running!");
});