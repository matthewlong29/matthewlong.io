import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'matthew-long-dot-io',
  styleUrls: ['./dotio.component.scss'],
  template: `<dotio-banner></dotio-banner>`
})
export class DotioComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
