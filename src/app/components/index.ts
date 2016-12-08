import { NgModule, ModuleWithProviders } from '@angular/core';

import { BuColumnsModule } from './columns/columns.module';
export { BuColumnsModule } from './columns/columns.module';

const BU_MODULES = [
  BuColumnsModule
];

@NgModule({
  imports: [
    BuColumnsModule.forRoot()
  ],
  exports: BU_MODULES
})
export class BuRootModule {
}

@NgModule({ imports: BU_MODULES, exports: BU_MODULES })
export class BuModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: BuRootModule };
  }
}
