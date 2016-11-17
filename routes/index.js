var express = require('express');
var router = express.Router();
var meetup = require('meetup-api')({
	key: process.env.MEETUP_KEY
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title: 'Exchange.js'});
});

router.get('/api/events', function(req, res) {
  meetup.getEvents({
    group_urlname: "startupedmonton"
  }, function(error, evts) {
    if (error) {
      if (error.status === 401) {
        res.json({
            error: "Please configure a MEETUP_API environmental variable with a Meetup API key, available from https://secure.meetup.com/meetup_api/key/"
        })
      }
      res.json(error);
    } else {
      let events = evts.results.filter(evt => evt.name.indexOf("Exchange.js") != -1);
      res.json(events);
    }
  });
});
router.get('/code-of-conduct', function(req, res) {
  res.render('code-of-conduct', {title: 'Code of Conduct'});
});

module.exports = router;
