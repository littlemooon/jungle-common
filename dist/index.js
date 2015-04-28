'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _mapObj$callIfFunction$throwError = require('./general');

var _reducePaths$navigatePath = require('./paths');

var _getCursorFns = require('./cursors');

'use strict';

exports['default'] = {
	mapObj: _mapObj$callIfFunction$throwError.mapObj,
	callIfFunction: _mapObj$callIfFunction$throwError.callIfFunction,
	throwError: _mapObj$callIfFunction$throwError.throwError,
	reducePaths: _reducePaths$navigatePath.reducePaths,
	navigatePath: _reducePaths$navigatePath.navigatePath,
	getCursorFns: _getCursorFns.getCursorFns
};
module.exports = exports['default'];