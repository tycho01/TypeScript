function add<A extends number, B extends number>(a: A, b: B) {
    return a + b;
}

const addFixed = <A extends 1, B extends 2>(a: A, b: B) => a + b;
