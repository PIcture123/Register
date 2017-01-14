var app = require('express')();
var server = require('http').Server(app);
var  io = require('socket.io')(server);
var port = process.env.PORT || 1212;
var assert = require('assert');
var express = require('express');
app.use("/static",express.static("./public"));
server.listen(port, function () {
  console.log('Server listening at port %d', port);
});
app.get('/',function(req,res){
    res.render("./index.pug");
});
io.on('connection',function(socket){
    socket.on('userInfo',function(user){
        var MongoClient = require('mongodb').MongoClient
var	assert = require('assert');
var insertDocument = function(db,username,password,firstname,lastname,teacher,parent,callback){
					 var collection = db.collection('schoolPrem');
					 collection.insertMany([
							 {username:username,password:password,firstname:firstname,lastname:lastname,teacher:teacher,parent:parent}
					 ],function(err,result){
					 assert.equal(err,null);
					 console.log("Inserted 1 documents into the collection");
					 callback(result);
					 });
}
console.log(user);
					var url = "mongodb://valeri:dodo2110@ds163698.mlab.com:63698/school";
					 MongoClient.connect(url,function(err,db){
							 assert.equal(null,err);
							 console.log("Connected correcly to server");
							 insertDocument(db,user.username,user.lastname,user.firstname,user.lastname,user.teacher,user.parent,function(doc){					
									 db.close();
									 
									 });
							 });
    });
});