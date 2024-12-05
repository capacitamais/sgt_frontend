import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  standalone: false,
  
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})


export class UsuarioComponent implements OnInit {
  
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  usuarios=[{
    user_id:0,
    nome: "Lisa",
    email: "lisa@gmail.com",
    tipo:"user",
    senha:"123",
    cpf:"1234"
  }]

  selectedId: number = 0;
  selectedUser: any = {};

  selectedIdBtn(id: number) {
    this.selectedId = id;
    this.selectedUser = this.usuarios.find((usuario) => usuario.user_id === id);
    console.log('selectedIdBtn', this.selectedId);
    console.log('selectedUser', this.selectedUser);
  }

  ngOnInit() {
    console.log('ngOnInit');
    fetch('http://localhost:3000/user', {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            console.log('something went wrong');
            this._router.navigate(['']);
          }
          return response.json();
        })
        .then((data) => {
          this.usuarios = data; // update table view
          this.usuarios.forEach((usuario) => {
            console.log(usuario.nome);
          });
        });
    } 
  
}
