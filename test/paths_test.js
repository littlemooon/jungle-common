
import {reducePaths, navigatePath} from '../src/paths';

describe('reducePaths function', () => {

	it('should return a blank object if no path is provided', () => {
		reducePaths().should.eql({});
	});
	it('should return a blank object if no path is provided', () => {
		() => reducePaths('', null, 'qwe').should.throw(`No qwes have been passed to your root component`);
	});
});

describe('navigatePath function', () => {

});
