import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LottoComponent } from './lotto/lotto.component';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'lotto',
    pathMatch: 'full'
  },
  {
    path: 'lotto',
    component: LottoComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LottoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
