# node-find-api [![Travis-CI.org Build Status](https://img.shields.io/travis/Qix-/node-find-api.svg?style=flat-square)](https://travis-ci.org/Qix-/node-find-api) [![Coveralls.io Coverage Rating](https://img.shields.io/coveralls/Qix-/node-find-api.svg?style=flat-square)](https://coveralls.io/r/Qix-/node-find-api)
> Finds all of the API calls and docs in a source file

This package is a highly-specialized, glorified regex engine that finds
all API calls in a file.

For most languages, the documentation comment block starts with a double-start
block comment (e.g. `/**`), though languages that do not have these style of
comments will require looking up the proper format in [langs.js](langs.js).

## Example
```javascript
var findAPI = require('find-api');
var fs = require('fs');

var testJs = fs.readFileSync('./test.js').toString();
var testC = fs.readFileSync('./test.c').toString();

var jsAPIs = findAPI(testJs);
var cAPIs = findAPI(testC);

/*
	test.js:

	[
		{ doc: "This is a documented function.",
		  api: "var bar = function (a, b, c);"
		}
	]

	test.c:

	[
		{ doc: "Documented function.",
		  api: "struct some_struct_t *some_func(void);"
		}
	]
*/
```

*test.js*
```javascript
/**
 * This is a documented function.
 */
var bar = function (a, b, c) {
	return a + b + c;
};
```

*test.c*
```c
/**
	Documented function.
 */
struct some_struct_t *
some_func(void) {
	return malloc(sizeof(some_struct_t));
}
```

## License
Licensed under the [MIT License](http://opensource.org/licenses/MIT).
You can find a copy of it in [LICENSE](LICENSE).
