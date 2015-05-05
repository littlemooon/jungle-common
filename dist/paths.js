'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _mapObj$throwError = require('./general');

'use strict';

exports['default'] = {
	reducePaths: function reducePaths(paths, tree, getFn, errorType) {
		var _this = this;

		// dont get rekt
		if (!paths) {
			return {};
		} // return a map of each path through the tree
		return _mapObj$throwError.mapObj(paths, function (val) {
			return _this.navigatePath(val, tree, getFn, errorType);
		});
	},

	navigatePath: function navigatePath(path, tree, getFn, errorType) {
		return pathAsArray(path).reduce(function (obj, key) {
			// if we have been given a getter then use it, otherwise treat as an object
			var value = obj && (getFn ? getFn(obj, key) : obj[key]);

			// throw error or return null if not found
			var found = obj && value !== undefined;
			return found ? value : errorType ? _mapObj$throwError.throwError('Cannot find ' + errorType + ': \'' + path + '\'') : null;
		}, tree);
	}
};

var pathAsArray = function pathAsArray(path) {
	return path.constructor === String ? path.split('.') : path;
};
module.exports = exports['default'];