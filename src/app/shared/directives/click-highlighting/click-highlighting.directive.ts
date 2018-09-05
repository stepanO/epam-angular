import {Directive, HostBinding, HostListener, Input, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appClickHighlighting]'
})
export class ClickHighlightingDirective {
  @Input('appClickHighlighting') options = {
    fontSize: 14,
    border: 'none',
    padding: '0'
  };
  @HostBinding('style.font-size') fontSize: number;
  @HostBinding('style.border') border: string;
  @HostBinding('style.padding') padding: string;

  constructor(private el: ViewContainerRef) {
  }

  @HostListener('click', ['$event']) hover(event) {
    if (event.target === this.el.element.nativeElement) {
      this.fontSize = this.options.fontSize || 14;
      this.border = this.options.border || 'none';
      this.padding = this.options.padding || '0';
    }
  };
}
