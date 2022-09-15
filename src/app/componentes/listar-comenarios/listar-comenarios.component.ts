
import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/comentarios';


@Component({
  selector: 'app-listar-comenarios',
  templateUrl: './listar-comenarios.component.html',
  styleUrls: ['./listar-comenarios.component.css']
})
export class ListarComenariosComponent implements OnInit {
  
  listComentarios: Comentario []= [
    {
    titulo:'Programación',
    autor:'Edison Insuasty',
    fechaCreacion: new Date(),
    texto:'Este es un comentario'
  
  },

  {
    titulo:'Objetos',
    autor:'Carlos Ayala',
    fechaCreacion: new Date(),
    texto:'Este es un comentario'
  
  },

  {
    titulo:'Angular',
    autor:'Maria Josa',
    fechaCreacion: new Date(),
    texto:'Este es un comentario'
  
  },

  {
    titulo:'Flutter',
    autor:'Andres Paz',
    fechaCreacion: new Date(),
    texto:'Este es un comentario'
  
  },

  {
    titulo:'Boostrap',
    autor:'Jose Obando',
    fechaCreacion: new Date(),
    texto:'Este es un comentario'
  
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
