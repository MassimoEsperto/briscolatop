import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';

@Component({
  selector: 'my-confirm-dialog',
  templateUrl: './my-confirm-dialog.component.html',
  styleUrls: ['./my-confirm-dialog.component.scss']
})
export class MyConfirmDialogComponent implements OnInit {  

  message: any;  

  constructor(  
      private confirmDialogService: ConfirmDialogService  
  ) { }  

  ngOnInit(): any {  
   
      this.confirmDialogService.getMessage().subscribe(message => {  
          this.message = message;  
      });  
  }  
}  