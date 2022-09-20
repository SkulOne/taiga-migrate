import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TuiButtonModule, TuiRootModule} from "@taiga-ui/core";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TuiRootModule, TuiButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
