class BaseTest {
    setup() {
        console.log("Base: Open browser")
    }
}

class APITest extends BaseTest {
    setup() {
        super.setup(); // ✅ correct way to call parent method
        console.log("APITest: Open browser")
    }
}

let test = new APITest();
test.setup(); // whoever object is present, it will call that. 

/* 
Output
Base: Open browser
APITest: Open browser */