import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AgregarEditarComentarioComponent } from './componentes/agregar-editar-comentario/agregar-editar-comentario.component';
import { ListarComenariosComponent } from './componentes/listar-comenarios/listar-comenarios.component';
import { VerComentariosComponent } from './componentes/ver-comentarios/ver-comentarios.component';
import { ListarDatosPersonalesComponent } from './componentes/listar-datos-personales/listar-datos-personales.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesComponent } from './heroes/heroes.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarEditarComentarioComponent,
    ListarComenariosComponent,
    VerComentariosComponent,
    ListarDatosPersonalesComponent,
    HeroesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
