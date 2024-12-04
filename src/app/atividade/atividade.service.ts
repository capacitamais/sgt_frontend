import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atividade, Treinamento } from './atividade.model';

@Injectable({
  providedIn: 'root',
})
export class AtividadeService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getAtividades(): Observable<Atividade[]> {
    return this.http.get<Atividade[]>(`${this.apiUrl}/atividades`);
  }

  addAtividade(atividade: Atividade): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/atividades`, atividade);
  }

  updateAtividade(atividade: Atividade): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/atividades/${atividade.atividade_id}`, atividade);
  }

  deleteAtividade(atividadeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/atividades/${atividadeId}`);
  }

  getAllTreinamentos(): Observable<Treinamento[]> {
    return this.http.get<Treinamento[]>(`${this.apiUrl}/treinamentos`);
  }

  getTreinamentosByAtividade(atividadeId: number): Observable<Treinamento[]> {
    return this.http.get<Treinamento[]>(`${this.apiUrl}/atividades/${atividadeId}/treinamentos`);
  }

  addRequisitoTreinamento(atividadeId: number, treinamentoId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/atividades/${atividadeId}/treinamentos`, {
      treinamento_id: treinamentoId,
    });
  }

  removeRequisitoTreinamento(atividadeId: number, treinamentoId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/atividades/${atividadeId}/treinamentos/${treinamentoId}`
    );
  }
}
