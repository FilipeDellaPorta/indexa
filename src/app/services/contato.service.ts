import { Injectable } from '@angular/core';

interface Contato {
  id: number;
  nome: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private contatos: Contato[] = [
    { id: 1, nome: 'Ana', telefone: '29 278869420' },
    { id: 2, nome: 'Ágata', telefone: '38 128451235' },
    { id: 3, nome: 'Beatriz', telefone: '25 854986459' },
    { id: 4, nome: 'Cláudia', telefone: '31 176437098' },
    { id: 5, nome: 'Diana', telefone: '16 670764734' },
  ];
  constructor() {
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString
      ? JSON.parse(contatosLocalStorageString)
      : null;

    this.contatos = contatosLocalStorage || this.contatos;

    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos() {
    return this.contatos;
  }
}
