import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostBinding, HostListener, Inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[csScrollTop]'
})
export class ScrollTopDirective {
  private scrollThreshold = 150;

  @HostBinding('class') scrollTopBtn = 'scroll-top-btn';

  @HostListener('click') onClick() {
    window.scrollTo(0, 0);
  }

  @HostListener('document:scroll') onScroll() {
    let scrollPosiiton = window.scrollY || this.document.documentElement.scrollTop || this.document.body.scrollTop;

    if(scrollPosiiton > this.scrollThreshold) {
      this.renderer.setStyle(this.hostElement.nativeElement, 'display', 'block')
    } else {
      this.renderer.setStyle(this.hostElement.nativeElement, 'display', 'none')
    }
  }

  constructor(private renderer : Renderer2,
              private hostElement : ElementRef,
              @Inject(DOCUMENT) private document) { }

}
