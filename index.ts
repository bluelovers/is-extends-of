/**
 * Created by user on 2018/11/23/023.
 */

export interface IConstructor<T extends unknown>
{
	new(...argv): T;
	readonly prototype: T;
}

// @ts-ignore
const EMPTY_OBJ_PROTOTYPE = {}.__proto__;
const FUNCTION_PROTOTYPE = Function.prototype;

function isExtendsOf<T extends IConstructor>(classConstructor: T,
	targetConstructor: IConstructor,
): classConstructor is T
{
	let prototype;
	let current = classConstructor;

	if (
		!classConstructor
		|| !classConstructor.prototype
		|| !targetConstructor
		|| !targetConstructor.prototype
	)
	{
		throw new TypeError(`not a constructor object`)
	}

	if (classConstructor === targetConstructor)
	{
		return true;
	}

	do
	{
		prototype = Object.getPrototypeOf(current);

		if (prototype === targetConstructor)
		{
			return true;
		}
		else if (prototype === null)
		{
			return false;
		}

		current = prototype;
	}
	while (prototype && !(
		prototype === FUNCTION_PROTOTYPE
		|| prototype === EMPTY_OBJ_PROTOTYPE
	));

	return false;
}

isExtendsOf.isExtendsOf = isExtendsOf;
isExtendsOf.default = isExtendsOf;

export = isExtendsOf
