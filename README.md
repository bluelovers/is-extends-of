# is-extends-of

    check class is extends of or equal another class

## install

```
npm install is-extends-of
```

## api

[index.d.ts](index.d.ts)

## demo

[index.test.ts](test/index.test.ts)

```ts
class A1 extends Function
{

}

class A2 extends A1
{

}

console.log(isExtendsOf(Function, Function))
console.log(isExtendsOf(A1, Function))
console.log(isExtendsOf(A2, A1))
console.log(isExtendsOf(A2, Function))
```
