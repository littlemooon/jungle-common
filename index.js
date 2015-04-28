'use strict';

import {mapObj, callIfFunction, throwError} from './src/general';
import {reducePaths, navigatePath} from './src/paths';
import {getCursorFns} from './src/cursors';

export default {
	mapObj,
	callIfFunction,
	throwError,
	reducePaths,
	navigatePath,
	getCursorFns
};
