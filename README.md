# Angular Bulma

Angular 2 UI component library built on top of [bulma](http://bulma.io/).

## Getting started

Install Angular Bulma, and bulma itself:
```bash
yarn add angular2-bulma bulma
```

Import bulma into your `styles.scss`
```scss
// Your styles
...

// Your bulma overriden variables
$primary: #72d0eb;
...

// At the end
@import "~bulma";
```

Add and call `BuModule.forRoot()` in your app module
```typescript
import { NgModule } from '@angular/core';
import { BuModule } from './components/index';

@NgModule({
  imports: [
    BuModule.forRoot()
  ]
})
export class AppModule { }
```