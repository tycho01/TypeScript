//// [inferentiallyTypingAnEmptyArray.ts]
declare function foo<T>(arr: T[]): T;
foo([]).bar;

//// [inferentiallyTypingAnEmptyArray.js]
foo([]).bar;
