import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'bu-title',
  template: `
    <ng-content></ng-content>
  `
})
export class BuTitle {
  @HostBinding('class.title') _class = true;
}
