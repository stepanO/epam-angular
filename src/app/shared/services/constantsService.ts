import {InjectionToken} from "@angular/core";

export interface IConstants {
  App: string;
  Ver: string;
}
export const ConstantsService = new InjectionToken<IConstants>('ConstantsService');

export const Constant = {
  App: "TaskManager", Ver: "1.0"
};
