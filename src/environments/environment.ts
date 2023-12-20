// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environments.ts` with `environments.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {Environment} from 'src/app/core/environment/environment.model';

export const environment: Environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
};

