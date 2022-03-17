"use strict";
const express = require('express');
const router = express.Router();

router.use(express.static('public'));

router.get('*', (req, res) => {
	switch(req.url) {
		case '/favicon.ico':
			res.end();
			break;
		default:
			res.status(404).render('pages/404');
			break;
	}
});

module.exports = router;
