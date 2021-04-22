import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from "@angular/forms";
import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise1/exercise1.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
