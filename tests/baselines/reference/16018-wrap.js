//// [16018-wrap.ts]
type Inc = { [k: string]: string; 0:'1',1:'2',2:'3',3:'4',4:'5'};
type ObjectHasKey<O extends {}, K extends string> = ({[K in keyof O]: '1' } & { [k: string]: '0' })[K];
type Length<R extends {}, I extends string = '0'> = { 1: Length<R, Inc[I]>, 0: I }[ObjectHasKey<R, I>];
type TestLenA = Length<{ 0: 'a', 1: 'b' }>;
// ^ ok, 2
type Wrap<O> = Length<O>;
// type Wrap<O, Len extends Length<O> = Length<O>> = Len;
// ^ old work-around, same result here
type TestLenB = Wrap<{ 0: 'a', 1: 'b' }>;
// ^ 0 :(


//// [16018-wrap.js]
// ^ 0 :(
