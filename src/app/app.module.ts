
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SistemaVeicularTabelaComponent } from './sistema-veicular-tabela/sistema-veicular-tabela.component';
import { SistemaVeicularCadastrarComponent } from './sistema-veicular-cadastrar/sistema-veicular-cadastrar.component';
import { routing } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDebugComponent } from './shared/form-debug/form-debug.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SistemaVeicularTabelaComponent,
    SistemaVeicularCadastrarComponent,
    FormDebugComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
