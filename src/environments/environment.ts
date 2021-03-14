import { Environment } from './type';

export let environment: Environment = {
  assetsStaticI18n: '', assetsStaticItemName: '', cdnPath: '',
  production: false,
  mockProviders: [],

  isEnv: 'dev',
  protocol: 'http',
  basePath: 'localhost:8090'
};

export const setEnvironment = (env: Environment | null) => {
  if (env) {
    environment = env;
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
