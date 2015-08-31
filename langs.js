'use strict';

module.exports = {
	javascript: {
		doc: {
			pattern: /(?:^|[\r\n])[\x20\t]*\/\*\*((?:(?!\*\/)(?:.|[\r\n]))+)\*\/\s*((?:(?!function\s+(?:[$\w]+)?\().)+function\s*(?:[$\w]+)?\s*\((?:[^)]*\)))/g,
			clean: [
				{
					pattern: /(^|[\r\n])\s*(\*\s?)?/g,
					replace: '$1'
				}
			]
		},
		api: {
			clean: [
				{
					pattern: /(?:\s{2,}|[\r\n]+)/g,
					replace: ' '
				},
				{
					pattern: /^(.*)$/,
					replace: '$1;'
				}
			]
		}
	},
	c: {
		doc: {
			pattern: /(?:^|[\r\n])[\x20\t]*\/\*\*((?:(?!\*\/)(?:.|[\r\n]))+)\*\/\s*((?:(?:(?!\w+\s*\()(?:.|[\r\n]))+)\w+\s*\([^)]+\))/g,
			clean: [
				{
					pattern: /^(?:(?:\x20*\*\x20?)|(?:\t*))/gm,
					replace: ''
				}
			]
		},
		api: {
			clean: [
				{
					pattern: /(?:\s{2,}|[\r\n]+)/g,
					replace: ' '
				},
				{
					pattern: /^(.*)$/,
					replace: '$1;'
				}
			]
		}
	}
};
