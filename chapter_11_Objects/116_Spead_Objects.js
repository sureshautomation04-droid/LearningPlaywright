const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const copy = {...obj1};
console.log(copy) //{ a: 1, b: 2 }

const merged = {...obj1,...obj2};
console.log(merged) //{ a: 1, b: 2, c: 3, d: 4 }

// this keyword
const user = {
    name: "Promd",
    saymyName(lastName) {
        this.name += lastName;
        return this.name;
    }
}
console.log(user.saymyName('Dutta')); // PromdDutta