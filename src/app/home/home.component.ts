import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pages = [
    { title: 'Atividades', description: 'Gerencie as atividades cadastradas.', link: '/atividade' },
    { title: 'Colaboradores', description: 'Gerencie informações dos colaboradores.', link: '/colaborador' },
    { title: 'Usuários', description: 'Gerencie os usuários do sistema.', link: '/usuario' },
  ];
}

