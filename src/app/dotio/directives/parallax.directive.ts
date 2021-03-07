import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[dotioParallax]'
})
export class ParallaxDirective {
  @Input('ratio') public parallaxRatio: number = 1;
  public initialTop: number = 0;

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
  }

  @HostListener("window:scroll", ["$event"])
  public onWindowScroll(event) {
    const value = (this.initialTop - (window.scrollY * this.parallaxRatio));

    this.eleRef.nativeElement.style.top =  `${value}px`;
    // this.eleRef.nativeElement.style.height = `calc(100% - ${value}px)`;

  }

}
