import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProduitsComponent } from './produits/produits.component';
import { CommandesComponent } from './commandes/commandes.component';
import { ClientsComponent } from './clients/clients.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  //{ path: 'user', component:  },
  { path: 'accueil', component: AccueilComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'commandes', component: CommandesComponent },
  { path: 'clients', component: ClientsComponent },
  //{ path: 'print', component: MedecinListPdfComponent },
  { path: 'accessdenied', component: AccessDeniedComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
