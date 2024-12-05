import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(private _router: Router) {}

  pages = [
    { title: 'Atividades', description: 'Gerencie as atividades cadastradas.', link: '/atividade' },
    { title: 'Colaboradores', description: 'Gerencie informações dos colaboradores.', link: '/colaborador' },
    { title: 'Usuários', description: 'Gerencie os usuários do sistema.', link: '/usuario' },
  ];

  // goUsuario(event: Event) {
  //   console.log('goUsuario');
  //   // event.preventDefault();
  //   // this._router.navigate(['usuario']);
  // }

}

