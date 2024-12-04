import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AtividadeComponent } from './atividade/atividade.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AtividadeComponent,
    ColaboradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
