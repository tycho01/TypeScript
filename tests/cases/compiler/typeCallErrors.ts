// binary function composition
type Fn1 = <T1 extends number>(v1: T1[]) => { [k: string]: T1 };
type Fn2 = <T2>(v2: { [k: string]: T2 }) => ReadonlyArray<T2>;
let fn1 = null! as Fn1;
let fn2 = null! as Fn2;
type Fn3 = <T3 extends number[]>(v3: T3) => Fn2(Fn1(T3));
let ones = null! as 1[];
type Fn4 = Fn3(1); // errors, ok
let x = fn2(fn1(1)); // errors with not assignable, ok
type X = Fn2(Fn1(1)); // errors with not assignable, ok

declare function safeDivide<
  B extends number,
  NotZero = ((v: '1') => 'whatever')({
    (v: 0): '0';
    (v: number): '1';
    (v: any): '2';
  }(B))
>(a: number, b: B): number;
safeDivide(3, 1); // not ok, fails with error: Argument of type '1' is not assignable to parameter of type '0'
safeDivide(3, 0); // successfully errors: Argument of type '"0"' is not assignable to parameter of type '"1"'
// errors accidentally pointed at the type call node instead of the external call site...

function comparability<T>(x: T, y: () => T) {
    x === x;
    y === y;
    x === y; // rightfully errors
}
