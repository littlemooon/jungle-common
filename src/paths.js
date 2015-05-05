'use strict';

import {mapObj, throwError} from './general';

export default {
	reducePaths: function(paths, tree, getFn, errorType) {
		// dont get rekt
		if (!paths) return {};

		// return a map of each path through the tree
		return mapObj(paths, val => this.navigatePath(val, tree, getFn, errorType));
	},

	navigatePath: (path, tree, getFn, errorType) => {
		return pathAsArray(path).reduce((obj, key) => {
			// if we have been given a getter then use it, otherwise treat as an object
			const value = obj && (getFn ? getFn(obj, key) : obj[key]);

			// throw error or return null if not found
			if (errorType) throwError(`Cannot find ${errorType}: '${path}'`);
			return !obj || value === undefined ? null : value;
		}, tree);
	}
};

const pathAsArray = path => path.constructor === String ? path.split('.') : path;
