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


app.get('/events/:event_title', (req, res) => {
	switch (req.params.event_title){





































			case "events-intfair2015":
			res.sendFile(path.join(__dirname+'/events-intfair2015.html'));
			break;
		case "events-intfair2016":
		break;
			res.sendFile(path.join(__dirname+'/events-intfair2016.html'));
			break;
		case "events-intfair2017":
			res.sendFile(path.join(__dirname+'/events-intfair2017.html'));
			break;
			case "events-intfair2018":
			res.sendFile(path.join(__dirname+'/events-intfair2018.html'));
			break;
			case "events-musicfestival2016":
			res.sendFile(path.join(__dirname+'/events-musicfestival2016.html' ));
			break;
			case "events-new-volunteers":
			res.sendFile(path.join(__dirname+'/events-new-volunteers.html' ));
			break;
			case "events-peacock-kindergarden":
			res.seneFile(path.join(__dirname+'/events-peacock-kindergarden.html'));
			break;
			case "events-sampleclass":
			res.sendFile(path.join(__dirname+'/events-sampleclass.html'));
			break;
			case "events-shsid":
			res.sendFile(path.join(__dirname+'/events-shsid.html'));
			break;
			case "events-songjiang":
			res.sendFile(path.join(__dirname+'/events-songjiang.html'));
			break;
			case "events-worldmusicfestival2016";
			res.sendFile(path.join(__dirname+'/events-worldmusicfestival2016.html'));
			break;
			case "events-xiangyang":
			res.sendFile(path.join(__dirname+'/events-xiangyang.html'));
			break;


	}
});

app.listen(port, () => {
	console.log("running!");
});
