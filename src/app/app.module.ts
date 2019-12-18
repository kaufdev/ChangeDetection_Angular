import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PropositionProcessor} from './dependecies/propositon-generator.service';
import { PropositionComponent } from './proposition/proposition.component';

@NgModule({
  declarations: [
    AppComponent,
    PropositionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PropositionProcessor],
  bootstrap: [AppComponent]
})
export class AppModule { }
