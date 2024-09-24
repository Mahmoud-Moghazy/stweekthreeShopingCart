import { Account } from "./account.module.js";
import { Home } from "./home.module.js";
import { Register } from "./register.module.js";

export class ShoppingCart {
  constructor() {
    this.account = new Account();
    this.auth();
  }

  auth() {
    const user = Account.loadFromLocalStorage() || false;
    if (!user.loggedIn) {
      new Register();
    } else {
      new Home();
    }
  }
}