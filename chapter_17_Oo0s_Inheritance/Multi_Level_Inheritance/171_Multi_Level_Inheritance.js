// Grand Father -> Father -> Son
// BasePage -> AuthPape -> AdminPage

class BasePage {
    constructor(name) {
        this.name = name;
    }

    open() {
        console.log("[Open] " + this.name);
    }
}

class AuthPage extends BasePage {
    login(user) {
        console.log("[Login] " + user)
    }
}

class AdminPage extends AuthPage {
    constructor() {
        super("Admin Panel");
    }

    manageUsers() {
        console.log("[ADMIN] Managing users");
    }
}

let admin = new AdminPage();
admin.open(); // [Open] Admin Panel
admin.login("super admin"); // [Login] super admin
admin.manageUsers(); // [ADMIN] Managing users