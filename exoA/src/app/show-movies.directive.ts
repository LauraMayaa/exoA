import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowMovies]'
})
export class ShowMoviesDirective implements OnInit {

  @HostBinding('class.movies')
  showMovies: boolean = false;

  constructor() { }
  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseenter') mouseEnterEvent(eventData: Event) {
    this.showMovies = true;
  }
  @HostListener('mouseleave') mouseLeaveEvent(eventData: Event) {
    this.showMovies = false;
  }

}
