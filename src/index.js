'use strict';
//load modules
var express = require('express'),
  bodyParser = require('body-parser'),
  Datastore = require('nedb'),
  path = require('path');
var mongoose = require('mongoose');

var Employee = require('../Models/employee.js').Employee;
var Rating = require('../Models/rating.js').Rating;
//setup database
var url = 'mongodb://vara1:vara1@mycluster-shard-00-00-zucif.gcp.mongodb.net:27017,mycluster-shard-00-01-zucif.gcp.mongodb.net:27017,mycluster-shard-00-02-zucif.gcp.mongodb.net:27017/emp?ssl=true&replicaSet=myCluster-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function (callback) {
    console.log('Successfully connected to MongoDB.');
});

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
var port = process.env.PORT || 5000;


app.use('/', express.static('public'));

app.post('/getdata/:id',(req,res)=>{
	console.log(req.params);
	Employee.findOne({empId : req.params.id},(err,emp)=>{
		console.log(emp);
		res.send(emp);	
	})
})

app.post('/addemp/:id/:name/:date',(req,res)=>{
	var emp1 = new Employee(
	{
		empId : req.params.id,
		empName : req.params.name,
		empJdate : req.params.data
	});
	emp1.save(()=>{
		console.log("success");
		res.send('sccuess');
	})
})
app.post('/getlist',(req,res)=>{
	Employee.find({},{_id : 0},(err,list)=>{
		console.log(list);
		res.send(list);
		
	})
})
app.post('/evalu/:id/:p1/:p2/:p3/:p4/:comment',(req,res)=>{
	var evalemp = new Rating(
	{
		empId : req.params.id,
		q1 : req.params.p1,
		q2 : req.params.p2,
		q3 : req.params.p3,
		q4 : req.params.p4,
		comment : req.params.comment,
	});
	evalemp.save(()=>{
		console.log("success");
		res.send('sccuess');
	})
})// vendor scripts
app.get('/vendor/angular.js', function(req, res) {
  res.sendFile(path.join(__dirname, '../node_modules', 'angular', 'angular.js'));
});
app.get('/vendor/angular-route.js', function(req, res) {
  res.sendFile(path.join(__dirname, '../node_modules', 'angular-route', 'angular-route.js'));
});

app.listen(port);
console.log('Magic happens on port ' + port);
