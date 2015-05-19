'use strict';

var _arguments = arguments;
Object.defineProperty(exports, '__esModule', {
	value: true
});
'use strict';

exports['default'] = {
	mapObj: function mapObj(obj, fn) {
		return Object.keys(obj).reduce(function (acc, key) {
			acc[key] = fn(obj[key], key);
			return acc;
		}, {});
	},

	callIfFunction: function callIfFunction(obj) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		return typeof obj === 'function' ? obj.apply(undefined, args) : obj;
	},

	throwError: function throwError(err) {
		throw new Error(err);
	},

	debounce: function debounce(func) {
		var timeout = undefined;
		var clearTimeout = function clearTimeout() {
			return timeout = null;
		};
		return function () {
			timeout ? cancelAnimationFrame(timeout) : func.apply(undefined, _arguments);
			timeout = requestAnimationFrame ? requestAnimationFrame(clearTimeout) : setTimeout(clearTimeout, 16);
		};
	}
};
module.exports = exports['default'];