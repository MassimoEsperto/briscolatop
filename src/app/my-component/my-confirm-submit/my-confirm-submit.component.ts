import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';

@Component({
  selector: 'my-confirm-submit',
  templateUrl: './my-confirm-submit.component.html',
  styleUrls: ['./my-confirm-submit.component.scss']
})
export class MyConfirmSubmitComponent implements OnInit {

  //parametri di input valorizzati di default
  @Output() submit = new EventEmitter();
  @Input() testo: string = "invia";
  @Input() loading = false;

  constructor(private confirmDialogService: ConfirmDialogService) {}

  ngOnInit() { }

  showDialog() {  
    this.confirmDialogService.confirmThis("Sei sicuro di voler effettuare l'operazione?", () => {  
      this.submit.emit()
    })  
  }  
}

