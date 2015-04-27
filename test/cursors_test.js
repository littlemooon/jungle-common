
import {getCursorFns} from '../src/cursors';

import Cortex from 'cortexjs';
import Baobab from 'baobab';

const obj = {
	qwe: 123,
	asd: [1, 2, 3],
	zxc: {
		rty: 345
	}
};

describe('Default', () => {
	const tree = obj;
	const fns = getCursorFns(tree);

	describe('get function', () => {
		it('should return a nested value', () => {
			fns.get(tree, 'qwe').should.eql(123);
		});
		it('should return a nested array', () => {
			fns.get(tree, 'asd').should.eql([1, 2, 3]);
		});
		it('should return a nested map', () => {
			fns.get(tree, 'zxc').should.eql({rty: 345});
		});
	});

	describe('value function', () => {
		it('should return the object itself', () => {
			fns.value(tree, 'qwe').should.eql(tree);
		});
	});
});

describe('Cortex', () => {
	const tree = new Cortex(obj);
	const fns = getCursorFns(tree);
	const get = x => fns.get(tree, x);

	describe('get function', () => {
		it('should return another cursor', () => {
			get('qwe').constructor.name.should.eql('DataWrapper');
		});
	});

	describe('value function', () => {
		it('should return a nested value', () => {
			fns.value(get('qwe')).should.eql(123);
		});
		it('should return a nested array', () => {
			fns.value(get('asd')).should.eql([1, 2, 3]);
		});
		it('should return a nested map', () => {
			fns.value(get('zxc')).should.eql({rty: 345});
		});
	});
});

describe('Baobab', () => {
	const tree = new Baobab(obj);
	const fns = getCursorFns(tree);
	const get = x => fns.get(tree, x);

	describe('get function', () => {
		it('should return another cursor', () => {
			get('qwe').constructor.name.should.eql('Cursor');
		});
	});

	describe('value function', () => {
		it('should return a nested value', () => {
			fns.value(get('qwe')).should.eql(123);
		});
		it('should return a nested array', () => {
			fns.value(get('asd')).should.eql([1, 2, 3]);
		});
		it('should return a nested map', () => {
			fns.value(get('zxc')).should.eql({rty: 345});
		});
	});
});
