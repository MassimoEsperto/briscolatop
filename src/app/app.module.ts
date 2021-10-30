import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { HomeComponent } from './view/home/home.component';
import { MatchLiveComponent } from './view/match-live/match-live.component';
import { StoricoComponent } from './view/storico/storico.component';
import { GestionePartitaComponent } from './view/gestione-partita/gestione-partita.component';
import { MultiSelectComponent } from './my-component/multi-select/multi-select.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyButtonSubmitComponent } from './my-component/my-button-submit/my-button-submit.component';
import { MyToastComponent } from './my-component/my-toast/my-toast.component';
import { MySpinnerComponent } from './my-component/my-spinner/my-spinner.component';
import { TableRecordComponent } from './my-component/table-record/table-record.component';
import { MyConfirmSubmitComponent } from './my-component/my-confirm-submit/my-confirm-submit.component';
import { MyConfirmDialogComponent } from './my-component/my-confirm-dialog/my-confirm-dialog.component';
import { ConfirmDialogService } from './services/confirm-dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    HomeComponent,
    MatchLiveComponent,
    StoricoComponent,
    GestionePartitaComponent,
    MultiSelectComponent,
    MyButtonSubmitComponent,
    MyToastComponent,
    MySpinnerComponent,
    TableRecordComponent,
    MyConfirmSubmitComponent,
    MyConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [ConfirmDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
