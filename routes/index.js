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
  }, function(error, events) {
    if (error) {
      res.json(error);
    } else {
      let events = events.results.filter(evt => evt.name.indexOf("Exchange.js") != -1);
      res.json(events);
    }
  });
});
router.get('/code-of-conduct', function(req, res) {
  res.render('code-of-conduct', {title: 'Code of Conduct'});
});

module.exports = router;
