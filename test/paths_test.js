
import {reducePaths, navigatePath} from '../src/paths';


describe('navigatePath function', () => {

	describe('with a matching path', () => {
		it('should return the value for a string path', () => {
			navigatePath('qwe.asd', {qwe: {asd: 123}}).should.eql(123);
		});
		it('should return the value for an array path', () => {
			navigatePath(['qwe', 'asd'], {qwe: {asd: 123}}).should.eql(123);
		});
		it('should return the value with an error type specified', () => {
			navigatePath('qwe.asd', {qwe: {asd: 123}}, false, 'Test').should.eql(123);
		});
	});

	describe('with no matching path', () => {
		it('should error if errorType is specified', () => {
			expect(() => navigatePath('qwe.asd.zxc', {qwe: {asd: 123}}, false, 'Test')).to.throw(`Cannot find Test: 'qwe.asd.zxc'`);
		});
		it('should return null if no errorType specified', () => {
			expect(navigatePath('qwe.asd.zxc', {qwe: {asd: 123}})).to.eql(null);
		});
	});
});

describe('reducePaths function', () => {
	it('should return a blank object if no paths specified', () => {
		reducePaths().should.eql({});
	});
	it('should map each path key to the value of that path', () => {
		reducePaths({1: 'qwe.asd', 2: 'zxc'}, {qwe: {asd: 123}, zxc: 234}, '').should.eql({1: 123, 2: 234});
	});
});
