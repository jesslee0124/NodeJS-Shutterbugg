var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
				"header-section" : {
					"heading-title" : "Introducing Shutterbugg",
					"heading-tagline" : "Capture the moments that matter.",
					"heading-button" : "Download Shutterbugg"
				},

				"content-a" : {
					"content-a-heading" : "Share",
					"content-a-description" : "Share your moments with the people who matter to you most. With Shutterbugg, it's easy to share with the right people."
				},
				"content-b" : {
					"content-b-heading" : "Explore",
					"content-b-description" : "Explore moments from your friends and family. Shutterbugg makes it easy to see what's happening in the world and take in everything around you."
				},
				"content-c" : {
					"content-c-heading" : "Save",
					"content-c-description" : "Save every photo you take. Shutterbugg automatically saves your photos so you can show them off from anywhere."
				},

				"store-section" : {
					"store-heading" : "Available for iPhone, iPad, and Android."
				},

				"footer-company" : {
					"footer-company-heading" : "Company",
					"footer-company-list1" : "Careers",
					"footer-company-list2" : "Terms",
					"footer-company-list3" : "Help"
				},

				"footer-products" : {
					"footer-products-heading" : "Products",
					"footer-products-list1" : "Shutterbugg",
					"footer-products-list2" : "Speakerboxx"
				},	

				"footer-news" : {
					"footer-news-heading" : "News",
					"footer-news-list1" : "Blog",
					"footer-news-list2" : "Twitter",
					"footer-news-list3" : "YouTube",
					"footer-news-list4" : "Google+",
					"footer-news-list5" : "Facebook"
				}			

			});
});

module.exports = router;
