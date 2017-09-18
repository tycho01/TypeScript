//// [typeArithmetic.ts]
function add<A extends number, B extends number>(a: A, b: B) {
    return a + b;
}

const addFixed = <A extends 1, B extends 2>(a: A, b: B) => a + b;


//// [typeArithmetic.js]
function add(a, b) {
    return a + b;
}
var addFixed = function (a, b) { return a + b; };
