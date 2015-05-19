'use strict';

export default {
	mapObj: (obj, fn) => {
		return Object.keys(obj).reduce((acc, key) => {
			acc[key] = fn(obj[key], key);
			return acc;
		}, {});
	},

	callIfFunction: (obj, ...args) => typeof obj === 'function' ? obj(...args) : obj,

	throwError: function(err) { throw new Error(err); },

	debounce: (func) => {
		let timeout;
		const clearTimeout = () => timeout = null;
		return () => {
			timeout ? cancelAnimationFrame(timeout) : func.apply(this, arguments);
			timeout = requestAnimationFrame ? requestAnimationFrame(clearTimeout) : setTimeout(clearTimeout, 16);
		};
	}
};
