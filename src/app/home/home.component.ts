import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pages = [
    { title: 'Atividades', description: 'Gerencie as atividades cadastradas.', link: '/atividades' },
    { title: 'Colaboradores', description: 'Gerencie informações dos colaboradores.', link: '/colaboradores' },
    { title: 'Treinamentos', description: 'Gerencie os treinamentos disponíveis.', link: '/treinamentos' },
    { title: 'Requisitos de Treinamento', description: 'Configure os requisitos de treinamento.', link: '/requisitos-treinamento' },
    { title: 'Treinamentos Realizados', description: 'Veja os treinamentos realizados.', link: '/treinamentos-realizados' },
    { title: 'Usuários', description: 'Gerencie os usuários do sistema.', link: '/usuarios' },
  ];
}

