import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AtividadeComponent } from './atividade/atividade.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'atividade', component: AtividadeComponent},
  {path: 'colaborador', component: ColaboradorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
