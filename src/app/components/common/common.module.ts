import { NgModule, ModuleWithProviders } from '@angular/core';
import { BuSize } from './common.directives';
import { BuTitle } from './common.components';

@NgModule({
  declarations: [ BuSize, BuTitle ],
  exports: [ BuSize, BuTitle ]
})
export class BuCommonModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: BuCommonModule, providers: []};
  }
}
