'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _mapObj = require('./general');

'use strict';

exports['default'] = {
	reducePaths: function reducePaths(paths, tree, desc, getFn) {
		var _this = this;

		// dont get rekt
		if (!paths) {
			return {};
		}if (!tree) throw new Error('No ' + desc + 's have been passed to your root component');

		// return a map of each path through the tree
		return _mapObj.mapObj(paths, function (val) {
			return _this.navigatePath(val, tree, desc, getFn);
		});
	},

	navigatePath: function navigatePath(path, tree, desc, getFn) {
		return pathAsArray(path).reduce(function (obj, key) {
			// if we have been given a getter then use it, otherwise treat as an object
			var value = obj && (getFn ? getFn(obj, key) : obj[key]);

			// return null if not found
			return !obj || value === undefined ? null : value;
		}, tree);
	}
};

var pathAsArray = function pathAsArray(path) {
	return path.constructor === Array ? path : path.split('.');
};
module.exports = exports['default'];