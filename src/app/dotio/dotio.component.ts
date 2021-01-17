import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'matthew-long-dot-io',
  styleUrls: ['./dotio.component.scss'],
  template: `<main>
               <dotio-navigation></dotio-navigation>
               <dotio-center></dotio-center>
               <dotio-footer></dotio-footer>
             </main>`
})
export class DotioComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
