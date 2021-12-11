/**
 * Created by user on 2018/11/23/023.
 */
export interface IConstructor<T extends unknown> {
	new (...argv: any[]): T;
	readonly prototype: T;
}
export declare function isExtendsOf<T extends IConstructor<any>>(classConstructor: any, targetConstructor: T): classConstructor is T;
export default isExtendsOf;

export {};
