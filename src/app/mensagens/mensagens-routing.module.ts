import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensagemListComponent } from './mensagem-list/mensagem-list.component';


const routes: Routes = [{
  path: '',
  component: MensagemListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensagensRoutingModule { }
