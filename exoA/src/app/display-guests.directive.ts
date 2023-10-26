import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appDisplayGuests]'
})
export class DisplayGuestsDirective {

  constructor(private tplRef: TemplateRef<any>, private vwRef: ViewContainerRef) { }

  @Input() set appDisplayGuests(cat: boolean) {
    if (cat) {
      this.vwRef.createEmbeddedView(this.tplRef);
    } else {
      this.vwRef.clear();
    }
  }

}
