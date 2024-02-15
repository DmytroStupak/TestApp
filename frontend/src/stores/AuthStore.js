import { makeAutoObservable } from "mobx";
import { UserManager } from "oidc-client";
import { configuration } from "../configurations";

class AuthStore {
  mgr = new UserManager(configuration);

  constructor() {
    makeAutoObservable(this);
  }

  async login() {
    this.mgr.signinRedirect();
  }

  async logout() {
    this.mgr.signoutRedirect();
  }
}
export default AuthStore;
