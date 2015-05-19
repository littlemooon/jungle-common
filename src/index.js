'use strict';

import {mapObj, callIfFunction, throwError, debounce} from './general';
import {reducePaths, navigatePath} from './paths';
import {getCursorFns} from './cursors';

export default {
	mapObj,
	callIfFunction,
	throwError,
	reducePaths,
	navigatePath,
	getCursorFns,
	debounce
};
