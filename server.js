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
	res.sendFile(path.join(__dirname + '/about-us-update.html'));
})

app.get('/events', (req, res)=>{
	res.sendFile(path.join(__dirname + '/events.html'));
})

app.get('/eye-news', (req, res)=>{
	res.sendFile(path.join(__dirname + '/eye-news.html'));
})
app.get('/media', (req, res) => {
	res.sendFile(path.join(__dirname + '/media.html'));
});
app.get('/our-story', (req, res) => {
	res.sendFile(path.join(__dirname + '/our-story.html'));
});

app.get('/join-us', (req, res) => {
	res.sendFile(path.join(__dirname + '/join-us.html'));
});
app.get('/members-bio', (req, res) => {
	res.sendFile(path.join(__dirname + '/members-bio.html'));
});


app.listen(port, () => {
	console.log("running!");
});