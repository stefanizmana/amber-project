import { Provider } from '@angular/core';

export interface Environment {
  readonly production: boolean;
  readonly mockProviders: Provider[];
  readonly bootstrap?: {
    readonly pageModel: any;
    readonly services: any;
  };
  readonly isEnv: string;
  readonly protocol: string;
  readonly basePath: string;
  readonly cdnPath: string;

  // From BB AssetsResolvers
  readonly assetsStaticItemName: string;

  // XXX: This path can also be composed be from:
  // BB.config.staticResourcesRoot + assetsStaticItemName + /assets/i18n
  readonly assetsStaticI18n: string;
}
