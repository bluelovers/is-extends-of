/**
 * Created by user on 2018/11/23/023.
 */
declare function isExtendsOf<T extends FunctionConstructor>(classConstructor: T, targetConstructor: FunctionConstructor): classConstructor is T;
declare namespace isExtendsOf {
    var isExtendsOf: typeof isExtendsOf;
    var default: typeof isExtendsOf;
}
export = isExtendsOf;
