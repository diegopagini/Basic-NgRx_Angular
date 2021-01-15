import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
//NgRx
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './contador/contador.reducer';

@NgModule({
  declarations: [AppComponent, HijoComponent, NietoComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contador: contadorReducer }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
