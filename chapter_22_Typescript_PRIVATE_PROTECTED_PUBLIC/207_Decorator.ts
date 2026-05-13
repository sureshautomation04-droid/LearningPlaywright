function Role(role: string) {
    return function (constructor: Function) {
        constructor.prototype.role = role;
    };
}

@Role("ADMIN")   // ✅ correct usage
class Admin {}

const admin = new Admin();
console.log((admin as any).role); // ADMIN