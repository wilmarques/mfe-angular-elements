import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListComponent } from './contacts/list.component';

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
})
export class AppModule implements DoBootstrap {
  constructor(
    private readonly injector: Injector,
    private readonly router: Router,
  ) {}

  public ngDoBootstrap() {
    const element = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('contacts-element', element);

    this.performInitialNavigation();
  }

  private performInitialNavigation(): void {
    this.router.navigate([''], {
      skipLocationChange: true, // this is necessary to not conflict with the container app route
    });
  }
}
