import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PropositionProcessor} from './dependecies/propositon-generator.service';
import { PropositionPanelComponent } from './proposition-panel/proposition-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    PropositionPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PropositionProcessor],
  bootstrap: [AppComponent]
})
export class AppModule { }
