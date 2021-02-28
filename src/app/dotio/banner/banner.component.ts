import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'dotio-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  public glassWindowWidth: string;
  public glassWindowHeight: string;

  constructor() { }

  ngOnInit(): void {
    this.glassWindowWidth = `${document.documentElement.scrollTop + 400}px`;
    this.glassWindowHeight = `${document.documentElement.scrollTop + 600}px`;
  }

  @HostListener('window:scroll')
  public onScrollCalculateExpansion(): void {
    this.glassWindowWidth = `${document.documentElement.scrollTop * 2 + 400}px`;
    this.glassWindowHeight = `${document.documentElement.scrollTop * 2 + 600}px`;
  }
}
