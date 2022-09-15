import { Component, OnInit } from '@angular/core';
import { DatosPersonales } from 'src/app/interfaces/comentarios';

@Component({
  selector: 'app-listar-datos-personales',
  templateUrl: './listar-datos-personales.component.html',
  styleUrls: ['./listar-datos-personales.component.css']
})
export class ListarDatosPersonalesComponent implements OnInit {



  listdatos: DatosPersonales []= [
    {
    Identificacion:12,
    nombre:'Edison',
    apellido:'Insuasty',
    direccion:'calle3',
    email:'edisonins15@gmail.com',
    telefono:'313608'
  
  },

  {
    Identificacion:44,
    nombre:'Andres',
    apellido:'Paz',
    direccion:'call2 34',
    email:'andres@gmail.com',
    telefono:'314566'
  
  },


]
  constructor() { }

  ngOnInit(): void {
  }

}
