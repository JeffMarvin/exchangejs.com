const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('./data/meetups.json', 'utf8', (err, contents) => {
    if (err) {
      return next(err);
    }
    const meetups = JSON.parse(contents);
    return res.render('index', {title: 'Exchange.js', meetups: meetups});
  });
});

router.get('/code-of-conduct', function(req, res) {
  res.render('code-of-conduct', {title: 'Code of Conduct'});
});

module.exports = router;
