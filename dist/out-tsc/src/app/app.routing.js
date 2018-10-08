import { SistemaVeicularCadastrarComponent } from './sistema-veicular-cadastrar/sistema-veicular-cadastrar.component';
import { RouterModule } from '@angular/router';
import { SistemaVeicularTabelaComponent } from './sistema-veicular-tabela/sistema-veicular-tabela.component';
var APP_ROUTES = [
    { path: '', component: SistemaVeicularTabelaComponent },
    { path: 'tabela', component: SistemaVeicularTabelaComponent },
    { path: 'cadastrar', component: SistemaVeicularCadastrarComponent }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map