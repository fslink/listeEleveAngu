var express = require('express')
var router = express.Router()
var mongoose = require('../models/connection')
var Liste = require('../models/Liste')
var path = require('path')

router.get('/eleves', function(req, res, next){
	mongoose.set('debug', true);
	Liste.find({}, function (err, docs) {
		if (err) return handleError(err)
		res.json(docs)
	})
})

.get('/eleves/:id', function(req, res, next){
	Liste.findById(req.param('id'), function (err, docs) {
		if (err) {
			res.send('id non trouvé')
		} else {
			res.json(docs)
		}
	})
})

module.exports = router
