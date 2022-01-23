import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListComponent } from './contacts/list.component';
import { EditComponent } from './contacts/edit.component';

@NgModule({
  declarations: [AppComponent, ListComponent, EditComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
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
    this.router.initialNavigation();
    // this.router.navigate([''], {
    //   skipLocationChange: true, // this is necessary to not conflict with the container app route
    // });
  }
}
