import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'bu-columns',
  template: `
    <ng-content></ng-content>
  `
})
export class BuColumns {
  @HostBinding('class.columns') _class = true;
}

@Component({
  selector: 'bu-column',
  template: `
    <ng-content></ng-content>
  `
})
export class BuColumn {
  @HostBinding('class.column') _class = true;
}
