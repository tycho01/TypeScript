//// [test-17428.ts]
function Generic<T extends string, U extends string>(a: T, b: U) {
    a == b;
}


//// [test-17428.js]
function Generic(a, b) {
    a == b;
}
