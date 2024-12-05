import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-colaborador',
  standalone: false,
  
  templateUrl: './colaborador.component.html',
  styleUrl: './colaborador.component.css'
})
export class ColaboradorComponent implements OnInit{
  
  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  colaboradores=[{
   colaborador_id: 0,
        nome: "",
        email: "",
        cpf: 0,
        nascimento: "2000-01-01T00:00:00.000Z",
        admissao: "2000-01-01T00:00:00.000Z",
        desligamento: "2000-01-01T00:00:00.000Z",
        cargo: ""
  }]

  selectedId: number = 0;
  selectedColaborador: any = {};

  selectedIdBtn(id: number) {
    this.selectedId = id;
    this.selectedColaborador = this.colaboradores.find((colaborador) => colaborador.colaborador_id === id);
    console.log('selectedIdBtn', this.selectedId);
    console.log('selectedUser', this.selectedColaborador);
  }

ngOnInit(): void {
  console.log('ngOnInit');
  fetch('http://localhost:3000/colaborador', {
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
        this.colaboradores = data; // update table view
        this.colaboradores.forEach((colaborador) => {
          console.log(colaborador.nome);
        });
      });
}

}
