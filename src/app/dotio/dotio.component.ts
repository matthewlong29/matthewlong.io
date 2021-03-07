import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'matthew-long-dot-io',
  template: `
    <dotio-banner></dotio-banner>
    <dotio-background></dotio-background>
    <dotio-content></dotio-content>
    <dotio-footer></dotio-footer>
  `
})
export class DotioComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
