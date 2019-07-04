import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteListComponent } from './cliente-list/cliente-list.component';

@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule
  ],
  declarations: [ClienteListComponent]
})
export class ClienteModule { }
