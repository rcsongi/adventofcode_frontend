import {InjectionToken} from '@angular/core';
import {Environment} from './environment.model';
import {environment} from "../../../environments/environment";

export const ENVIRONMENT = new InjectionToken<Environment>('globalConfig', {
  providedIn: 'root',
  factory: () => environment,
});
