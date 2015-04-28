'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
'use strict';

exports['default'] = {
	getCursorFns: function getCursorFns(cursor) {
		switch (cursor.constructor.name) {
			case 'Cortex':
				return cursorFns.cortex;
			case 'Baobab':
				return cursorFns.baobab;
			default:
				return cursorFns['default'];
		}
	}
};

// define api for different tree implementations
var cursorFns = {
	cortex: {
		get: function get(x, key) {
			return x[key];
		},
		value: function value(x) {
			return x.val();
		}
	},
	baobab: {
		get: function get(x, key) {
			return x.select(key);
		},
		value: function value(x) {
			return x.get();
		},
		on: function on(x, cb) {
			return x.on('update', cb);
		},
		off: function off(x, cb) {
			return x.off('update', cb);
		}
	},
	// immstruct: {
	// 	get: (x, key) => x.cursor(key),
	// 	value: x => x.deref(),
	// 	on: (x, cb) => x.on('swap', cb),
	// 	off: (x, cb) => x.off('swap', cb)
	// },
	// reactCursor: {
	// 	get: (x, key) => x.refine(key),
	// 	value: x => x.value
	// },
	'default': {
		get: function get(x, key) {
			return x[key];
		},
		value: function value(x) {
			return x;
		}
	}
};
module.exports = exports['default'];