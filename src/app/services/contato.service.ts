import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private contatos: Contato[] = [
    {
      id: 1,
      nome: 'Ana',
      telefone: '29 278869420',
      email: 'agenda@corporativo.com',
    },
    {
      id: 2,
      nome: 'Ágata',
      telefone: '38 128451235',
      email: 'agenda@corporativo.com',
    },
    {
      id: 3,
      nome: 'Beatriz',
      telefone: '25 854986459',
      email: 'agenda@corporativo.com',
    },
    {
      id: 4,
      nome: 'Cláudia',
      telefone: '31 176437098',
      email: 'agenda@corporativo.com',
    },
    {
      id: 5,
      nome: 'Diana',
      telefone: '16 670764734',
      email: 'agenda@corporativo.com',
    },
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

  salvarContato(contato: Contato) {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}
