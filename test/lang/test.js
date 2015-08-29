'use strict';

/*
	this is some test comments.
	it shouldn't show up as an API doc.
*/

/*
	some random, non-documented function.
*/
var foo = function () {
	return 0;
};

/**
	This is a documented function.
*/
var bar = function (a, b, c) {
	return a + b + c;
};

/**
	This is a documented function with
	multiple lines.
*/
var qix = function qix(foo, herp, derp) {
	return [foo, herp, derp];
};
