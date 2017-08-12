==ORIGINAL==
namespace A {
    let y = 1;
    class C {
        a() {
            let z = 1;
            let a1 = { x: 1 };
            y = 10;
            z = 42;
            return a1.x + 10;
        }
    }
}
==SCOPE::class C==
namespace A {
    let y = 1;
    class C {
        a() {
            let z = 1;
            var __return: any;
            ({ __return, z } = this.newFunction(z));
            return __return;
        }

        private newFunction(z: number) {
            let a1 = { x: 1 };
            y = 10;
            z = 42;
            return { __return: a1.x + 10, z };
        }
    }
}
==SCOPE::namespace A==
namespace A {
    let y = 1;
    class C {
        a() {
            let z = 1;
            var __return: any;
            ({ __return, z } = newFunction(z));
            return __return;
        }
    }

    function newFunction(z: number) {
        let a1 = { x: 1 };
        y = 10;
        z = 42;
        return { __return: a1.x + 10, z };
    }
}
==SCOPE::file '/a.ts'==
namespace A {
    let y = 1;
    class C {
        a() {
            let z = 1;
            var __return: any;
            ({ __return, y, z } = newFunction(y, z));
            return __return;
        }
    }
}
function newFunction(y: number, z: number) {
    let a1 = { x: 1 };
    y = 10;
    z = 42;
    return { __return: a1.x + 10, y, z };
}
