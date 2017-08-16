import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,
  MdTabsModule, MdSliderModule, MdListModule, MdInputModule, MdProgressSpinnerModule, MdChipsModule, MdTooltipModule
} from '@angular/material';
import 'hammerjs';

import {AppComponent} from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HeaderComponent} from "./core/header/header.component";
import {AppRoutingModule} from "./app-routing.module";
import {ProfileComponent} from "./pages/profile.component";
import {LearnComponent} from "./pages/learn.component";
import {DataService} from "./shared/services/data.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdProgressSpinnerModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdTabsModule,
    MdListModule,
    MdInputModule,
    MdIconModule,
    MdSliderModule,
    AppRoutingModule,
    FlexLayoutModule,
    MdChipsModule,
    MdTooltipModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    LearnComponent,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
