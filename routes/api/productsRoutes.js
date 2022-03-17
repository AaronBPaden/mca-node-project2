"use strict";
const express = require('express');
const router = express.Router();
const API = 'https://api.sampleapis.com/beers';
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const fetchProductsList = (URL, title, productType, res) => {
	fetch(URL)
		.then(res => res.json())
		.then(data => {
			data.productType = productType;
			res.render('pages/products-list', {
				title: title,
				name: title,
				data
			});
		});
};

router.get('/ale', (req, res) => {
	fetchProductsList(`${API}/ale`, 'Ale Store', 'ale', res);
});

router.get('/stouts', (req, res) => {
	fetchProductsList(`${API}/stouts`, 'Stouts Store', 'stouts', res);
});

router.get('/red-ale', (req, res) => {
	fetchProductsList(`${API}/red-ale`, 'Red-Ale Store', 'red-ale', res);
});

module.exports = router;
