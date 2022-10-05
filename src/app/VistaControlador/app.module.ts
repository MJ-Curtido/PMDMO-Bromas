import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JokeListComponent } from './app.component';

@NgModule({
  declarations: [
    JokeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [JokeListComponent]
})
export class AppModule { }
