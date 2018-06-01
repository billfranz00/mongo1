const express = require("express");
const app = express();

const mongoose = require('mongoose');
mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose
	.connect("mongodb://localhost/mongo1", {
		// useMongoClient: true // depreciated
	})
	.then(() => {
		console.log("You're connected to mongo dough...");
	})
	.catch(err => {
		console.log(err);
	});

const { Instructor } = require("./models");

// CRUD Operations

// Create
// const billy = new Instructor({ firstName: "Billy"});
// billy
// 	.save()
// 	.then(newBilly => {
// 		console.log(newBilly);
// 	})
// 	.catch(err => {
// 		console.log("ERror saving...", err);
// 	});

// const billy = Instructor.create({ firstName: "Billy", lastName: "Franz" })
// 	.then(newInst => {
// 		console.log(newInst);
// 	})
// 	.catch(err => {
// 		console.log("Error creating", err);
// 	});

// const erin = Instructor.create({ firstName: "Erin", lastName: "Franz" })
// 	.then(newInst => {
// 		console.log(newInst);
// 	})
// 	.catch(err => {
// 		console.log("Error creating", err);
// 	});

// Read
Instructor.find({}) // Find multiple
	.then(instructors => {
		console.log(instructors);
	})
	.catch(err => {
		console.log("error finding!", err);
	});

// Instructor.findOne({firstName: 'Billy'}) // Find single record
// 	.then(inst => {
// 		console.log(inst);
// 	})
// 	.catch(err => {
// 		console.log("error finding one!", err);
// 	});

// Instructor.findById(2) // Find by ID (useful with req.params)
// 	.then(inst => {
// 		console.log(inst);
// 	})
// 	.catch(err => {
// 		console.log("error finding by ID!", err);
// 	});

// const query = Instructor.findOne({firstName: "Billy"}); // Query Builder Syntax

// query.select("firstName lastName"); // 

// query
// 	.exec()
// 	.then(inst => {
// 		console.log(inst);
// 		console.log('%s has the last name "%s".', inst.firstName, inst.lastName);
// 	})
// 	.catch(err => {
// 		console.log("ERROR with querying", err);
// 	});

// Update
// Instructor.update({firstName: "Billy"}, {isHilarious: false})
// 	.then(inst => {
// 		console.log(inst);
// 	})
// 	.catch(err => {
// 		console.log("ERror updating...", err);
// 	});

// Instructor.findOneAndUpdate({firstName: 'Billy'}, {favoriteColors: ['blue', 'black']})
// 	.then(inst => {
// 		console.log(inst);
// 	})
// 	.catch(err => {
// 		console.log("Error updating single record", err);
// 	});

// Instructor.findByIdAndUpdate('5b11a33e61598f308437d571', {firstName: 'Big Bill'})
// 	.then(inst => {
// 		console.log(inst);
// 	})
// 	.catch(err => {
// 		console.log("Error updating by Id...", err);
// 	});

// Delete
// Instructor.remove({isHilarious: false})
// 	.then(inst => {
// 		console.log(inst);
// 	})
// 	.catch(err => {
// 		console.log("Error deleting record", err);
// 	});

// Instructor.findOneAndRemove({firstName: "Erin"})
// 	.then(inst => {
// 		console.log(inst);
// 	})
// 	.catch(err => {
// 		console.log("Error removing single record...", err);
// 	});

// Instructor.findByIdAndRemove('5b11a33e61598f308437d571')
// 	.then(inst => {
// 		console.log(inst);
// 	})
// 	.catch(err => {
// 		console.log("Error removing single record...", err);
// 	});

app.listen(3000, () => {
	console.log('Bro, you connected, head over to localhost:3000...');
});