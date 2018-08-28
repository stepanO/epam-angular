import {InjectionToken} from "@angular/core";

export const ConstantService = new InjectionToken<any>('ConstantService');

export const Constant = {
  App: "TaskManager", Ver: "1.0"
};
