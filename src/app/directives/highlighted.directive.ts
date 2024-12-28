import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl',
})
export class HighlightedDirective {

  @Input("highlighted")
  isHighlighted = false;

  @Output()
  toggleEvent = new EventEmitter();

  constructor() {
  }
  //
  // @HostBinding('className')
  // get cssClasses() {
  //   return "highlighted";
  // }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  @HostListener('mouseover')
  mouseOver() {
    this.isHighlighted = true;
    this.toggleEvent.emit(this.isHighlighted);
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeave($event: MouseEvent) {
    console.log($event);
    this.isHighlighted = false;
  }

  // @HostBinding('style.border')
  // get cssClasses() {
  //   return "1px solid red";
  // }

  toggle(){
    this.isHighlighted = !this.isHighlighted;
    this.toggleEvent.emit(this.isHighlighted);
  }
}
