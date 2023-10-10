import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WildCardComponent } from './view/wild-card/wild-card.component';
import { LayoutModule } from './layout/layout.module';
import { ToasterComponent } from './shared/toaster/toaster.component';

@NgModule({
  declarations: [
    AppComponent,
    WildCardComponent,
    ToasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
