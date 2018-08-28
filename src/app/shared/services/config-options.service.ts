import {Injectable} from '@angular/core';
import {IConfigOptions} from "../models/i-config-options";

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  options: IConfigOptions = {
    id: '',
    login: '',
    email: '',
  };

  constructor() {
  }

  setId(id: string) {
    this.options.id = id;
  }

  getId() {
    return this.options.id;
  }

  setLogin(login: string) {
    this.options.login = login;
  }

  getLogin() {
    return this.options.login;
  }

  setEmail(email: string) {
    this.options.email = email;
  }

  getEmail() {
    return this.options.email;
  }

}
