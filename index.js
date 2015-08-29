'use strict';

function findAPIs(source, lang) {
	if (lang.constructor === String) {
		if (!(lang in findAPIs.language)) {
			throw new Error('unknown language: ' + lang);
		}
		lang = findAPIs.language[lang];
	}

	var results = [];
	var matches;
	while (matches = lang.doc.pattern.exec(source)) {
		var doc = matches[1];
		lang.doc.clean.forEach(function (cleaner) {
			doc = doc.replace(cleaner.pattern, cleaner.replace || '');
		});

		var api = matches[2];
		lang.api.clean.forEach(function (cleaner) {
			api = api.replace(cleaner.pattern, cleaner.replace || '');
		});

		results.push({
			doc: doc.trim(),
			api: api.trim()
		});
	}

	return results;
}

findAPIs.language = require('./langs');
findAPIs.language.js = findAPIs.language.javascript;

module.exports = findAPIs;
