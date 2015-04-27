'use strict';

import {mapObj} from '../src/general';

export default {
	reducePaths: function(paths, tree, desc, getFn) {
		// dont get rekt
		if (!paths) return {};
		if (!tree) throw new Error(`No ${desc}s have been passed to your root component`);

		// return a map of each path through the tree
		return mapObj(paths, val => this.navigatePath(val, tree, desc, getFn));
	},

	navigatePath: (path, tree, desc, getFn) => {
		return pathAsArray(path).reduce((obj, key) => {
			// if we have been given a getter then use it, otherwise treat as an object
			const value = obj && (getFn ? getFn(obj, key) : obj[key]);

			// return null if not found
			return !obj || value === undefined ? null : value;
		}, tree);
	}
};

const pathAsArray = (path) => path.constructor === Array ? path : path.split('.');
