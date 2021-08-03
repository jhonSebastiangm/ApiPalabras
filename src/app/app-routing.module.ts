import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalabrasComponent } from './vistas/palabras/palabras.component';
import { RespuestaComponent } from './vistas/respuesta/respuesta.component';

const routes: Routes = [
  {path:'',redirectTo:'inicio',pathMatch:'full'},
  {path:'inicio',component:PalabrasComponent},
  {path:'ObtenerPalabras/:frase',pathMatch:'full',component:RespuestaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
