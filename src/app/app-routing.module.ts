import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComenariosComponent } from './componentes/listar-comenarios/listar-comenarios.component';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarComentarioComponent } from './componentes/agregar-editar-comentario/agregar-editar-comentario.component';
import { VerComentariosComponent } from './componentes/ver-comentarios/ver-comentarios.component';


const routes: Routes=[
  {path:'', component: ListarComenariosComponent},
  {path:'add', component: AgregarEditarComentarioComponent},
  {path:'**', redirectTo:'',pathMatch:'full'},
  {path:'editar/:id', component:AgregarEditarComentarioComponent},
  {path: 'visualizar(:id', component:VerComentariosComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
]

@NgModule({
  imports: [
  RouterModule,
  RouterModule.forRoot(routes)
 // other imports here
 ],
 exports: [RouterModule]
})
export class AppRoutingModule { }