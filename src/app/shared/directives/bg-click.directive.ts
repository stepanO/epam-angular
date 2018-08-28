import {Directive, HostBinding, HostListener, Input, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appBgClick]'
})
export class BgClickDirective {
  @Input('appBgClick') color: string;
  @HostBinding('style.background-color') bgColor: string;
  constructor(private el: ViewContainerRef) { }

  @HostListener('click', ['$event']) hover(event) {
    if (event.target === this.el.element.nativeElement) {
      this.bgColor = this.color || 'green';
    }
  };

}
