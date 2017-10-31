var express = require('express')

var app = express()

app.use(express.static('./public'))

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



app.listen(8080, function(){

	console.log('The app is running on post 8080.')
})

