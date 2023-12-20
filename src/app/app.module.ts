
// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Importe se estiver usando formulários no seu componente
import { FeedComponent } from './componentes/feed/feed.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // Importe aqui se estiver usando formulários no seu componente
    // Outros módulos importados aqui, se houver
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
