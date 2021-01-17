import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'matthew-long-dot-io',
  template: `<dotio-navigation></dotio-navigation>
             <dotio-center></dotio-center>
             <dotio-footer></dotio-footer>`
})
export class DotioComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
