const express = require("express");
const app = express();

const mongoose = require('mongoose');
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
	.connect("mongodb://localhost/mongo1", {
		// useMongoClient: true
	})
	.then(() => {
		console.log("You're connected to mongo dough...");
	})
	.catch(err => {
		console.log(err);
	});

const { Instructor } = require("./models");

// const billy = new Instructor({ firstName: "Billy"});
// billy
// 	.save()
// 	.then(newBilly => {
// 		console.log(newBilly);
// 	})
// 	.catch(err => {
// 		console.log("ERror saving...", err);
// 	});

const billy = Instructor.create({ firstName: "Billy" })
	.then(newInst => {
		console.log(newInst);
	})
	.catch(err => {
		console.log("Error creating", err);
	});

app.listen(3000, () => {
	console.log('Bro, you connected, head over to localhost:3000...');
});