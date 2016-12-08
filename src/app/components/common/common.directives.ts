import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[buSize]'
})
export class BuSize {
  @Input()
  set buSize(value: number) {
    this.renderer.setElementClass(this.elementRef.nativeElement, `is-${value}`, true);
  }

  constructor(
    public elementRef: ElementRef,
    private renderer: Renderer
  ) {}
}
