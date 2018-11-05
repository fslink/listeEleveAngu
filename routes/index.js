var express = require('express')
var router = express.Router()
var mongoose = require('../models/connection')
var Liste = require('../models/Liste')
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname, '../', 'app', 'index.html'))
})

.get('/api/eleves', function(req, res, next){
	Liste.find({}, function (err, docs) {
		if (err) return handleError(err)
		res.json(docs)
	})
})

.get('/api/eleves/:id', function(req, res, next){
	Liste.findById(req.param('id'), function (err, docs) {
		if (err) {
			res.send('id non trouvé')
		} else {
			res.json(docs)
		}
	})
})

.get('/eleves', function(req, res, next){
	res.type('html')
	res.set(200)
	res.sendFile(path.join(__dirname + '/../tpJS/liste.html'))
})

.get('/eleves/:id', function(req, res, next){
	res.type('html')
	res.set(200)
	res.sendFile(path.join(__dirname + '/../tpJS/profil.html'))
})

module.exports = router
