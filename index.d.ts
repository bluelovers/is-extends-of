/**
 * Created by user on 2018/11/23/023.
 */
export interface IConstructor<T extends unknown> {
    new (...argv: any[]): T;
    readonly prototype: T;
}
declare function isExtendsOf<T extends IConstructor<any>>(classConstructor: T, targetConstructor: IConstructor): classConstructor is T;
declare namespace isExtendsOf {
    var isExtendsOf: {
        <T extends IConstructor<any>>(classConstructor: T, targetConstructor: IConstructor<any>): classConstructor is T;
        isExtendsOf: typeof isExtendsOf;
        default: typeof isExtendsOf;
    };
    var default: {
        <T extends IConstructor<any>>(classConstructor: T, targetConstructor: IConstructor<any>): classConstructor is T;
        isExtendsOf: typeof isExtendsOf;
        default: typeof isExtendsOf;
    };
}
export = isExtendsOf;
