import { NgModule, ModuleWithProviders } from '@angular/core';
import { BuColumns, BuColumn } from './columns';

@NgModule({
  declarations: [ BuColumns, BuColumn ],
  exports: [ BuColumns, BuColumn ]
})
export class BuColumnsModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: BuColumnsModule, providers: []};
  }
}
