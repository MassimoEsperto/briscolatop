import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionePartitaComponent } from './view/gestione-partita/gestione-partita.component';
import { HomeComponent } from './view/home/home.component';
import { MatchLiveComponent } from './view/match-live/match-live.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { StoricoComponent } from './view/storico/storico.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'match-live', component: MatchLiveComponent },
  { path: 'storico', component: StoricoComponent },
  { path: 'gestione-partita', component: GestionePartitaComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
