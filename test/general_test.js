
import {mapObj, callIfFunction, throwError} from '../src/general';

describe('mapobj function', () => {

	it('should handle a blank object', () => {
		mapObj({}).should.eql({});
	});
	it('should apply the function to each value', () => {
		mapObj({qwe: 123, asd: 234}, x => x * 2).should.eql({qwe: 246, asd: 468});
	});
});

describe('callIfFunction function', () => {

	it('should handle a blank arg', () => {
		callIfFunction('').should.eql('');
	});
	it('should return a non function', () => {
		callIfFunction(123).should.eql(123);
	});
	it('should execute a function with args and return the result', () => {
		callIfFunction((x, y) => `${x} ${y}`, 123, 234).should.eql(`123 234`);
	});
});

describe('throwError function', () => {

	it('should handle a blank arg', () => {
		() => throwError('').should.throw('');
	});
	it('should throw an error with the arg', () => {
		() => throwError(123).should.throw(new Error('123'));
	});
});
