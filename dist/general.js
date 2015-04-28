'use strict';

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
	}
};
module.exports = exports['default'];