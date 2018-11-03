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
		case "events-1stlesson":
			res.sendFile(path.join(__dirname + '/events/events-1stlesson.html'));
			break;
		case "events-9-23-2017":
			res.sendFile(path.join(__dirname + '/events/events-9-23-2017.html'));
			break;
		case "events-bailian":
			res.sendFile(path.join(__dirname + '/events/events-bailian.html'));
			break;
		case "events-celebrate-3-years":
			res.sendFile(path.join(__dirname + '/events/events-celebrate-3-years.html'));
			break;
		case "events-creativity-contest":
			res.sendFile(path.join(__dirname + '/events/events-creativity-contest.html'));
			break;
		case "events-duolunstreet":
			res.sendFile(path.join(__dirname + '/events/events-duolunstreet.html'));
			break;
		case "events-eyekitlaunch":
			res.sendFile(path.join(__dirname + '/events/events-eyekitlaunch.html'));
			break;
		case "events-founderbridget":
			res.sendFile(path.join(__dirname + '/events/events-founderbridget.html'));
			break;
		case "events-fudan":
			res.sendFile(path.join(__dirname + '/events/events-fudan.html'));
			break;
		case "events-interview-newspaper":
			res.sendFile(path.join(__dirname + '/events/events-interview-newspaper.html'));
			break;
		case "events-interviewchinayouthdaily":
			res.sendFile(path.join(__dirname + '/events/events-interviewchinayouthdaily.html'));
			break;
		case "events-intfair2015":
			res.sendFile(path.join(__dirname+'/events/events-intfair2015.html'));
			break;
		case "events-intfair2016":
			res.sendFile(path.join(__dirname+'/events/events-intfair2016.html'));
			break;
		case "events-intfair2017":
			res.sendFile(path.join(__dirname+'/events/events-intfair2017.html'));
			break;
		case "events-intfair2018":
			res.sendFile(path.join(__dirname+'/events/events-intfair2018.html'));
			break;
		case "events-musicfestival2016":
			res.sendFile(path.join(__dirname+'/events/events-musicfestival2016.html'));
			break;
		case "events-new-volunteers":
			res.sendFile(path.join(__dirname+'/events/events-new-volunteers.html' ));
			break;
		case "events-peacock-kindergarden":
			res.seneFile(path.join(__dirname+'/events/events-peacock-kindergarden.html'));
			break;
		case "events-sampleclass":
			res.sendFile(path.join(__dirname+'/events/events-sampleclass.html'));
			break;
		case "events-shsid":
			res.sendFile(path.join(__dirname+'/events/events-shsid.html'));
			break;
		case "events-songjiang":
			res.sendFile(path.join(__dirname+'/events/events-songjiang.html'));
			break;
		case "events-worldmusicfestival2016":
			res.sendFile(path.join(__dirname+'/events/events-worldmusicfestival2016.html'));
			break;
		case "events-xiangyang":
			res.sendFile(path.join(__dirname+'/events/events-xiangyang.html'));
			break;
	}
});

app.get('/articles/:article_title', (req, res) => {
	switch (req.params.article_title){
		case "article-carrots":
			res.sendFile(path.join(__dirname+'/articles/article-carrots.html'));
			break;
		case "article-eyemakeup":
			res.sendFile(path.join(__dirname+'/articles/article-eyemakeup.html'));
			break;
		case "article-glassescontacts":
			res.sendFile(path.join(__dirname+'/articles/article-glassescontacts.html'));
			break;
		case "article-lasersurgery":
			res.sendFile(path.join(__dirname+'/articles/article-lasersurgery.html'));
			break;
	}
});

app.listen(port, () => {
	console.log("running!");
});
