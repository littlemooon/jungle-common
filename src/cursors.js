'use strict';

export default {
	getCursorFns: cursor => {
		switch(cursor.constructor.name) {
			case 'Cortex':
				return cursorFns.cortex;
			case 'Baobab':
				return cursorFns.baobab;
			default:
				return cursorFns.default;
		}
	}
};

// define api for different tree implementations
const cursorFns = {
	cortex: {
		get: (x, key) => x[key],
		value: x => x.val()
	},
	baobab: {
		get: (x, key) => x.select(key),
		value: x => x.get(),
		on: (x, cb) => x.on('update', cb),
		off: (x, cb) => x.off('update', cb)
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
	default: {
		get: (x, key) => x[key],
		value: x => x
	}
};
