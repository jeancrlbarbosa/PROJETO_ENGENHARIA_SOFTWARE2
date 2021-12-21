import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RelatoriobackupComponent } from './relatoriobackup/relatoriobackup.component';

const routes: Routes = [
  // {path: '', redirectTo: '/login', pathMatch: 'full'},
  // {path: 'login', component: LoginComponent},
  // {path: 'relatorio', component: RelatoriobackupComponent},
  // { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
