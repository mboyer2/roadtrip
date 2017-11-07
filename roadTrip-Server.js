var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json())
app.use(urlencodedParser)
app.use(express.static('./public'))
app.use(express.static('./'))

app.get('/Home', function(request, response){
	response.sendFile('./roadTrip-index.html', {root:'./'})
})

app.get('/Boston', function(request, response){
	response.sendFile('./boston.html', {root:'./'})
})

app.get('/NYC', function(request, response){
	response.sendFile('./nyc.html', {root:'./'})
})

app.get('/Chicago', function(request, response){
	response.sendFile('./chicago.html', {root:'./'})
})

app.get('/Boulder', function(request, response){
	response.sendFile('./boulder.html', {root:'./'})
})

app.get('/San-Francisco', function(request, response){
	response.sendFile('./sanfrancisco.html', {root:'./'})
})

app.get('/cargo-validator', urlencodedParser, function(request, response){
	response.sendFile('/cargo-validator.html', {root:'./'})
})

// post request ????????

app.post('/validate', function(req, res){
	console.log(req.body)

		if (req.body.displayWeight>200 || req.body.displayCost>200) {
			res.status(409).send('You are over weight limit or cost limit')
		} else {
			res.status(200).send('Roadtrip Validated') 
		}
	
})


app.listen(8080, function(){

	console.log('The app is running on post 8080.')
})

