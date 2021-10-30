import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/class/model/Role';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';

@Component({
  selector: 'match-live',
  templateUrl: './match-live.component.html',
  styleUrls: ['./match-live.component.scss']
})
export class MatchLiveComponent implements OnInit {

  loading_btn: boolean = false;
  constructor(private confirmDialogService: ConfirmDialogService) {}

  ngOnInit() {
   }

   delTest(){
     
   }

   showDialog() {  
    this.confirmDialogService.confirmThis("Sei sicuro di voler effettuare l'operazione?", () => {  
      alert("Yes clicked");  
    })  
  }  
 
}