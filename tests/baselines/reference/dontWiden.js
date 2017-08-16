//// [dontWiden.ts]
const c = [1, 'a'];
const d = { a: 1, b: 'c' };

interface SomeInterface { a: boolean }
declare function foo(arg: number[]): void
declare function bar(arg: SomeInterface): void

// As variable assignees
const a: number[] = [1, 2, 3];
const b: SomeInterface = {a: true};

// Same, but as arguments
foo([1, 2, 3]);
bar({a: true});


//// [dontWiden.js]
var c = [1, 'a'];
var d = { a: 1, b: 'c' };
// As variable assignees
var a = [1, 2, 3];
var b = { a: true };
// Same, but as arguments
foo([1, 2, 3]);
bar({ a: true });
