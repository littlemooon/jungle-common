'use strict';

export default {
	mapObj: (obj, fn) => {
		return Object.keys(obj).reduce((acc, key) => {
			acc[key] = fn(obj[key], key);
			return acc;
		}, {});
	},

	callIfFunction: (obj, ...args) => typeof obj === 'function' ? obj(...args) : obj,

	throwError: function(err){ throw new Error(err); }
};
