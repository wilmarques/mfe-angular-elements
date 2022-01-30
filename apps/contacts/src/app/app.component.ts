import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'contacts-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('app - constructor');
  }

  public ngOnInit(): void {
    console.log('app - ngOnInit');
  }

  public ngOnDestroy(): void {
    console.log('app - ngOnDestroy');
  }

}
