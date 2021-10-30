import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BriscolaService } from 'src/app/services/briscola.service';

@Component({
  selector: 'gestione-partita',
  templateUrl: './gestione-partita.component.html',
  styleUrls: ['./gestione-partita.component.scss']
})
export class GestionePartitaComponent implements OnInit {

  chechList = []
  selected: any = []
  classifica = []
  record = []
  id_live: number = 0;
  loading_page: boolean = true;
  loading_btn: boolean = false;
  isStart: boolean = true;
  errore: string = "";
  selectedChiamante: any
  selectedChiamato: any
  selectedRisultato: any

  constructor(private servizi: BriscolaService) { }

  ngOnInit() {
    this.getLive()
    this.getUtenti()
  }

  selectedList(selected: any) {
    this.selected = selected
  }

  getUtenti() {

    this.servizi.getUtenti()
      .subscribe({
        next: (response: any) => {
          this.chechList = response
        },
        error: (error: any) => {
          this.errore = error
        }
      })
  }

  getLive() {

    this.servizi.getLive()
      .pipe(finalize(() => {
        this.loading_page = false;
        this.loading_btn = false
      }))
      .subscribe({
        next: (response: any) => {
          this.isStart = response.classifica.length == 0
          this.classifica = response.classifica
          this.record = response.record
          this.id_live = response.id_match
        
        },
        error: (error: any) => {
          this.errore = error
        }
      })
  }

  newMatch() {

    this.loading_btn = true
    this.servizi.insertNewMatch(this.selected)
      .pipe(finalize(() => {
        this.loading_btn = false;
        this.isStart = false
      }))
      .subscribe({
        next: (response: any) => {
          this.getLive()
        },
        error: (error: any) => {
          this.errore = error
        }
      })
  }

  onNewRecord() {

    this.loading_btn = true
    let risChiamanti: number = this.selectedRisultato
    let risGruppo: number = this.selectedRisultato == 2 ? 3 : 2

    let lista = [];

    if (this.selectedChiamante == this.selectedChiamato) {
      for (let ele of this.classifica) {
        let singolo = { id_utente: 1, id_ruolo: 4, id_risultato: risGruppo }
        singolo.id_utente = ele.id_utente
     
        if (ele.id_utente == this.selectedChiamante) {

          singolo.id_ruolo = 3
          singolo.id_risultato = risChiamanti
        } else {
          singolo.id_ruolo = 4
          singolo.id_risultato = risGruppo
        }
        lista.push(singolo)
      }
    }
    else {
      for (let ele of this.classifica) {
        let singolo = { id_utente: 1, id_ruolo: 4, id_risultato: risGruppo }
        singolo.id_utente = ele.id_utente

        switch (ele.id_utente) {
          case this.selectedChiamante:
            singolo.id_ruolo = 1
            singolo.id_risultato = risChiamanti
            break;
          case this.selectedChiamato:
            singolo.id_ruolo = 2
            singolo.id_risultato = risChiamanti
            break;

          default:
            singolo.id_ruolo = 4
            singolo.id_risultato = risGruppo
            break;
        }
        lista.push(singolo)
      }

    }
    this.newRecord(lista);
  }

  newRecord(lista: any) {

    this.loading_btn = true
    let payload = { id_partita: this.id_live, lista: lista }

    this.servizi.insertNewRecord(payload)
      .pipe(finalize(() => {


      }))
      .subscribe({
        next: (response: any) => {
          this.getLive()
        },
        error: (error: any) => {
          this.errore = error
          this.loading_btn = false;
        }
      })
  }

  onDeleteRecord(id_record){
    this.delRecord(id_record)
  }

  delRecord(id_record: any) {

    this.loading_page = true

    this.servizi.delRecord(id_record)
      .pipe(finalize(() => {


      }))
      .subscribe({
        next: (response: any) => {
          this.getLive()
        },
        error: (error: any) => {
          this.errore = error
          this.loading_page = false;
        }
      })
  }

  delMatch() {

    this.loading_btn = true

    this.servizi.closeMatch()
      .pipe(finalize(() => {

        this.loading_btn = false;
      }))
      .subscribe({
        next: (response: any) => {
          this.getLive()
        },
        error: (error: any) => {
          this.errore = error
        }
      })
  }

}
