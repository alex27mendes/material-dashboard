import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensagensRoutingModule } from './mensagens-routing.module';
import { MensagemListComponent } from './mensagem-list/mensagem-list.component';

@NgModule({
  imports: [
    CommonModule,
    MensagensRoutingModule
  ],
  declarations: [MensagemListComponent]
})
export class MensagensModule { }
