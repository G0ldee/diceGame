import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceViewComponent } from './dice-view/dice-view.component';
import { ControlViewComponent } from './control-view/control-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceViewComponent,
    ControlViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
