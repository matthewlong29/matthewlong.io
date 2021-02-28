import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'dotio-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public scrolledHeight: number;

  constructor() { }

  ngOnInit(): void {
    this.scrolledHeight = document.documentElement.scrollTop;

  }

  @HostListener('window:scroll')
  public onScrollCalculateExpansion(): void {
    this.scrolledHeight = document.documentElement.scrollTop;
    console.log(this.scrolledHeight);
  }

}
