import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PropositionProcessor} from './dependecies/propositon-generator.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PropositionProcessor],
  bootstrap: [AppComponent]
})
export class AppModule { }
