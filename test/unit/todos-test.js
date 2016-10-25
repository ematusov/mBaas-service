'use strict';

describe('todos api', function() {

var request, app;

//nice way to set up before each express test to make sure you have the right setup steps
	beforeEach(function() {
		app = require('express')();
		app.use('/todos', require('lib/todos'));

		request = require('supertest')(app);
	});

//express describe function
describe('list (GET/)', function() {
	it ('should return a list of records', function(done) {

		request
			.get('/todos')
			.expect('Content-Type', /json/)
			done();
	});
});





});