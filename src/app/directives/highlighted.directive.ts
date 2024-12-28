import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {

  @Input("highlighted")
  isHighlighted = false;

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

  // @HostBinding('style.border')
  // get cssClasses() {
  //   return "1px solid red";
  // }
}
