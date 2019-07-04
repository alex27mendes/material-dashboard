import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'cliente',
        loadChildren: './cliente/cliente.module#ClienteModule'
    },
    {
        path: 'orders',
        loadChildren: './orders/orders.module#OrdersModule'
    },
    {
        path: 'mensagens',
        loadChildren: '/mensagens/mensagens.module#MensagensModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}