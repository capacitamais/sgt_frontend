import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AtividadeComponent } from './atividade/atividade.component';

const routes: Routes = [{path: '', component: HomeComponent},{path: 'atividade', component: AtividadeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
