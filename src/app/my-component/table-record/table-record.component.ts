import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';

@Component({
  selector: 'table-record',
  templateUrl: './table-record.component.html',
  styleUrls: ['./table-record.component.scss']
})
export class TableRecordComponent implements OnInit {

  @Input() record:any
  @Output("selected") selected = new EventEmitter();

  constructor(private confirmDialogService: ConfirmDialogService) {}
  
 
  ngOnInit(): void {
  }

  showDialog(id_record:any) {  
    console.log("id_record",id_record)
    this.confirmDialogService.confirmThis("Sei sicuro di voler effettuare l'operazione?", () => {  
      this.selected.emit(id_record)
    })  
  }  

}
