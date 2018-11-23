/**
 * Created by user on 2018/11/23/023.
 */

/// <reference types="mocha" />
/// <reference types="benchmark" />
/// <reference types="chai" />
/// <reference types="node" />

import { chai, relative, expect, path, assert, util, mochaAsync } from './_local-dev';

// @ts-ignore
import { ITest } from 'mocha';
import isExtendsOf = require('../index');

// @ts-ignore
describe(relative(__filename), () =>
{
	let currentTest: ITest;

	beforeEach(function ()
	{
		currentTest = this.currentTest as ITest;

		//console.log('it:before', currentTest.title);
		//console.log('it:before', currentTest.fullTitle());
	});

	// @ts-ignore
	describe(`suite`, () =>
	{
		class A1 extends Function
		{

		}

		class A2 extends A1
		{

		}

		[
			{
				label: 'Function extends Function',
				input: Function,
				target: Function,
				bool: true,
			},
			{
				label: 'A1 extends of Function',
				input: A1,
				target: Function,
				bool: true,
			},
			{
				label: 'A2 extends of Function',
				input: A2,
				target: Function,
				bool: true,
			},
			{
				label: 'A2 extends of A1',
				input: A2,
				target: A1,
				bool: true,
			},
			{
				label: 'A2 not extends of Array',
				input: A2,
				target: Array,
				bool: false,
			},
		]
			.forEach(function (testData)
			{
				let label = testData.label || `${testData.input} extends of ${testData.target}: ${testData.bool}`;

				it(label, function ()
				{
					expect(isExtendsOf(testData.input, testData.target)).to.deep.equal(testData.bool);
				})
			})
		;

	});
});


