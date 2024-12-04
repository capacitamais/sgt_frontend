import { Component, OnInit } from '@angular/core';
import { AtividadeService } from './atividade.service';
import { Atividade, Treinamento } from './atividade.model';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-atividade',
  standalone: false,
  
  templateUrl: './atividade.component.html',
  styleUrl: './atividade.component.css'
})

export class AtividadeComponent {
  
}

// export class AtividadeComponent implements OnInit {
//   atividades: Atividade[] = [];
//   treinamentos: Treinamento[] = [];
//   allTreinamentos: Treinamento[] = [];
//   selectedAtividade: Atividade | null = null;
//   selectedTreinamento: number | null = null;
//   modalTitle = '';
  
//   constructor(private atividadeService: AtividadeService) {}

//   ngOnInit(): void {
//     this.loadAtividades();
//     this.loadAllTreinamentos();
//   }

//   loadAtividades(): void {
//     this.atividadeService.getAtividades().subscribe((data) => {
//       this.atividades = data;
//     });
//   }

//   loadAllTreinamentos(): void {
//     this.atividadeService.getAllTreinamentos().subscribe((data) => {
//       this.allTreinamentos = data;
//     });
//   }

//   openAddModal(): void {
//     this.modalTitle = 'Adicionar Atividade';
//     this.selectedAtividade = { atividade_id: 0, atividade: '' };
//     this.openModal('atividadeModal');
//   }

//   openEditModal(atividade: Atividade): void {
//     this.modalTitle = 'Editar Atividade';
//     this.selectedAtividade = { ...atividade };
//     this.openModal('atividadeModal');
//   }

//   saveAtividade(): void {
//     if (this.selectedAtividade) {
//       if (this.selectedAtividade.atividade_id === 0) {
//         this.atividadeService.addAtividade(this.selectedAtividade).subscribe(() => {
//           this.loadAtividades();
//           this.closeModal('atividadeModal');
//         });
//       } else {
//         this.atividadeService.updateAtividade(this.selectedAtividade).subscribe(() => {
//           this.loadAtividades();
//           this.closeModal('atividadeModal');
//         });
//       }
//     }
//   }

//   openDeleteModal(atividade: Atividade): void {
//     this.selectedAtividade = atividade;
//     this.openModal('deleteModal');
//   }

//   deleteAtividade(): void {
//     if (this.selectedAtividade) {
//       this.atividadeService.deleteAtividade(this.selectedAtividade.atividade_id).subscribe(() => {
//         this.loadAtividades();
//         this.closeModal('deleteModal');
//       });
//     }
//   }

//   openTreinamentosModal(atividade: Atividade): void {
//     this.selectedAtividade = atividade;
//     this.atividadeService.getTreinamentosByAtividade(atividade.atividade_id).subscribe((data) => {
//       this.treinamentos = data;
//       this.openModal('treinamentosModal');
//     });
//   }

//   addTreinamento(): void {
//     if (this.selectedAtividade && this.selectedTreinamento) {
//       this.atividadeService
//         .addRequisitoTreinamento(this.selectedAtividade.atividade_id, this.selectedTreinamento)
//         .subscribe(() => {
//           this.openTreinamentosModal(this.selectedAtividade!);
//         });
//     }
//   }

//   removeTreinamento(treinamento: Treinamento): void {
//     if (this.selectedAtividade) {
//       this.atividadeService
//         .removeRequisitoTreinamento(this.selectedAtividade.atividade_id, treinamento.treinamento_id)
//         .subscribe(() => {
//           this.openTreinamentosModal(this.selectedAtividade!);
//         });
//     }
//   }

//   private openModal(id: string): void {
//     const modal = new bootstrap.Modal(document.getElementById(id)!, {});
//     modal.show();
//   }

//   private closeModal(id: string): void {
//     const modalElement = document.getElementById(id);
//     const modal = bootstrap.Modal.getInstance(modalElement!);
//     modal?.hide();
//   }
// }




