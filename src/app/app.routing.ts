import { SistemaVeicularCadastrarComponent } from './sistema-veicular-cadastrar/sistema-veicular-cadastrar.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { SistemaVeicularTabelaComponent } from './sistema-veicular-tabela/sistema-veicular-tabela.component';

const APP_ROUTES: Routes = [
    { path: '', component: SistemaVeicularTabelaComponent },
    { path: 'tabela', component: SistemaVeicularTabelaComponent },
    { path: 'cadastrar', component: SistemaVeicularCadastrarComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);