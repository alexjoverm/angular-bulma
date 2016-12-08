import { Component, Input } from '@angular/core';

@Component({
  selector: 'bu-columns',
  template: `
    <div class="columns">
      <ng-content></ng-content>
    </div>
  `
})
export class BuColumns {
}

@Component({
  selector: 'bu-column',
  template: `
    <div class="column">
      <ng-content></ng-content>
    </div>
  `
})
export class BuColumn {
}